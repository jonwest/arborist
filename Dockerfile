FROM node:18-bullseye-slim AS base
WORKDIR /app
RUN chown -R 1000:1000 /app
RUN apt-get update -qq &&\
    apt-get install -y --no-install-recommends \
      ssh \
      apt-transport-https \
      ca-certificates
      

# On average, this `dev` stage adds around 20-30 seconds of build time, but
# incurs no additional storage penalties in the final container image as it 
# is only used within development.  Additionally, with proper caching, this
# build stage is generally skipped altogether.
FROM base AS dev
ARG DEV_PACKAGES
RUN apt-get update -qq &&\
    apt-get install -y --no-install-recommends \
      curl \
      sudo \
      git \
      ${DEV_PACKAGES} &&\
    rm -rf /var/lib/apt/lists/*;

# Allow user to sudo without password (since it's not known)
RUN usermod -a -G sudo node &&\
    sed -i /etc/sudoers -re 's/^%sudo.*/%sudo   ALL=(ALL:ALL) NOPASSWD: ALL/g'
USER 1000
CMD ["/bin/sh", "-c", "while sleep 1000; do :; done"]

FROM base AS build
# TBD

FROM base AS prod
# TBD
