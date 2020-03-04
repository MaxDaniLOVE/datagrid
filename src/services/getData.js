export default class GetData {
  githubDataService = async () => {
    const res = await fetch('https://api.github.com/users/maxdanilove');
    return res.json();
  }
}
