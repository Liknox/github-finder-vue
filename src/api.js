export default function getApi(userName) {
   return `https://api.github.com/users/${userName}/repos`
}