ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

COPY ["package.json", "package-lock.json*", "./"]
COPY . .

RUN npm install && npm run build
CMD ["npm","start"]