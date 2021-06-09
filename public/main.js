getJSON.onclick = () => {
  const request = new XMLHttpRequest() // readyState 0
  request.open('GET', './5.json') // xxx.open(method, url) // readyState 2
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const obj = JSON.parse(request.response) // JSON.parse: JSON数据转换
      myName.textContent = obj.name
    }
  }
  request.send() // readyState 2; readyState 3 = 下载中; readyState 4 = 下载完成
}

let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n+1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const arr = JSON.parse(request.response)
      arr.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const style = document.createElement('style')
      style.innerHTML = request.response
      document.body.appendChild(style)
    }
  }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const script = document.createElement('script')
      script.innerHTML = request.response
      document.body.appendChild(script)
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const div = document.createElement('div')
      div.innerHTML = request.response
      document.body.appendChild(div)
    }
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const div = document.createElement('div')
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      div.textContent = text.trim()
      document.body.appendChild(div)
    }
  }
  request.send()
}