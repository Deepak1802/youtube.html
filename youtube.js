fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Nature&key=AIzaSyBJu3nwOkuzGmC8cmZgW-2BL5xs3VcKfzc&maxResults=25")
.then((response)=>{
    return response.json();
})
.then((result)=>{
    console.log(result.items);
    let temp = "";
    let data = result.items
    data.forEach(element=>{
        temp += `<tr>`;
        temp += `<td>${element.id.videoId}</td>`;
        temp += `<td>${element.snippet.description}</td>`;
        temp += `<td>${element.snippet.channelId}</td>`;
        temp += `<td>${element.snippet.channelTitle}</td>`;
        temp += `<td><a href="#">${element.snippet.thumbnails.default.url}</a></td>`;
        temp += `</tr>`;
    })
    document.getElementById("data").innerHTML = temp
})
.catch((err)=>{
    console.log(err);
})
