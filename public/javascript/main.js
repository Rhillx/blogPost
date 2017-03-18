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

        function render(blogItems) {
            const container = document.querySelector('.js-blogPost');
            // container.innerHTML = "";
            for (const blogItem of blogItems) {
                const section = document.createElement('section');
                section.innerHTML =
    `<div class="inner">
      <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
      <div class="content">
        <h2 class="major">${blogItem.data.title}</h2>
        <p>${blogItem.data.body}</p>
        <a href="#" class="special">Read more</a>
      </div>
    </div>`  ;

                section.classList.add('wrapper', 'spotlight', 'style1');

                container.appendChild(section);


                // document.querySelector('.js-todo-remove').addEventListener('click', (e) => {
                //     console.log('about to delete LOL')
                //     const {id} = blogItem;
                //
                //     DELETE('/api/todo/' + blogItem.id)
                //         .then((data) => {
                //             render(data);
                //         })
                //         .catch((e) => {
                //             alert(e)
                //         });
                // });
                // li.querySelector('.js-todo-check').addEventListener('click', (e) => {
                //     console.log(blogItem);
                //     let isDone;
                //     if (blogItem.data.isDone) {
                //         isDone = false;
                //     } else {
                //         isDone = true;
                //     }
                //
                //     PUT('/api/blog/' + blogItem.id, {
                //             isDone
                //         })
                //         .then((data) => {
                //             render(data);
                //         })
                //         .catch((e) => {
                //             alert(e)
                //         })
                // })

            }
        }



    GET('/api/blogs')
			.then((blogItems) => {
        render(blogItems);
    });


    const postBttn = document.querySelector('.js-postBtn'); postBttn.addEventListener('click', (e) => {
        console.log('trying to post');
				// console.log(blogItems);
    	const input = document.querySelector('.js-blogtitle');
      const body = document.querySelector('.js-blogPostArea')
    	input.setAttribute('disabled', 'disabled');
      body.setAttribute('disabled', 'disabled');




    	POST('/api/blogs', {
    		title: input.value,
        blog: body.value,
    		when: new Date().getTime() + 9 * 60 * 60 * 1000
    	}).then((data) => {
    		input.removeAttribute('disabled');
        body.removeAttribute('disabled');
    		input.value = '';
        body.value = '';
    		render(data);
    	});
    })

})();
