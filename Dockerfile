ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT} AS dev

FROM dev AS prod
WORKDIR /workspaces/react-node-app/
COPY . .
RUN npm install && npm run build
CMD ["npm","start"]
