This App was created coding along with this tutorial https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/ plus some other knowledge already acquire.

some commands:
npx create-react-app client

Followed Steps:

1. At the beggining we use a dev container and then didnt know how to turn it into
production image.
2. Then a Dockerfile for production was added and realize that this dockerfile could be 
refered by the devcontainer in the devcontainer.json file for the remote containers 
extension to use it
3. We ran into trouble since the files are being copied twice, one is mounted inside the container by the remote containers extension and another copy comes from the Dockerfile COPY instruction, need to find a way to fix it.
I was thinking of creating two dockerfiles but the docs says that there's a way to approach this problem. This has been referred to as the “builder pattern”.

