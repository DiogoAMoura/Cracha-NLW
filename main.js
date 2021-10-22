const LinksSocialMedia = {
  github: 'DiogoAMoura',
  youtube: 'Su Mama Productions',
  facebook: 'None',
  instagram: 'dioogodam',
  twitter: 'D.A.M'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url) //Serve para pegar os dados do link, mas ele não entrega os valores
    .then(response => response.json()) //Diz que os arquivos são JSON
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
