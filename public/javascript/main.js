(function() { // protect the lemmings

        function GET(url) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('GET', url);
                request.onload = () => {
                    const data = JSON.parse(request.responseText);
                    resolve(data)
                };
                request.onerror = (err) => {
                    reject(err)
                };
                request.send();
            });
        } // GET

        function POST(url, data) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('POST', url);
                request.setRequestHeader('Content-Type', 'application/json');

                request.onload = () => {
                    const data = JSON.parse(request.responseText);
                    resolve(data)
                };
                request.onerror = (err) => {
                    reject(err)
                };

                request.send(JSON.stringify(data));
            });
        } // POST

        function PUT(url, data) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('PUT', url);
                request.setRequestHeader('Content-Type', 'application/json');

                request.onload = () => {
                    const data = JSON.parse(request.responseText);
                    resolve(data)
                };
                request.onerror = (err) => {
                    reject(err)
                };

                request.send(JSON.stringify(data));
            });
        } // POST

        function DELETE(url, data) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('DELETE', url);
                request.setRequestHeader('Content-Type', 'application/json');

                request.onload = () => {
                    const data = JSON.parse(request.responseText);
                    resolve(data)
                };
                request.onerror = (err) => {
                    reject(err)
                };

                request.send(JSON.stringify(data));
            });
        } // DELETE



        function renderToSite(blogItems){

          const container = document.querySelector('.js-blogPost')
          container.innerHTML= "";

          console.log(container);

          for(const blogItem of blogItems){
            const section = document.querySelector('.js-section');
            section.innerHTML=
  `<div class="inner">
    <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
      <div class="content">
        <h2 class="major">${blogItem.data.title}</h2>
        <p>${blogItem.data.blog}</p>
        <a href="#" class="special">Read more</a>
      </div>
  </div>`;

          section.classList.add('wrapper', 'spotlight', 'style1');
          container.appendChild(section);


          }
        }







// calling functions

GET('/api/blogs')
 .then((blogItems)=>{
  renderToSite(blogItems)
});






//click events

       const creatBtn = document.querySelector('.js-postBtn')
          creatBtn.addEventListener('click',(e)=>{
          const input= document.querySelector('.js-blogtitle')
          const body = document.querySelector('.js-blogPostArea')


              POST('/api/blogs', {
                title: input.value,
                blog: body.value,
                when: new Date().getTime() + 9 * 60 * 60 * 1000
              }).then((data) => {
                input.removeAttribute('disabled');
                body.removeAttribute('disabled');
                input.value = '';
                body.value = '';
                // window.location.href = '/';
            })

        })





















})();
