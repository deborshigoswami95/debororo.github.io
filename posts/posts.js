document.body.onload = render_posts;

var data = [
    {
        'title':'Accounts with Shared IDs',
        'tag': 'code',
        'description':'Coding solution for an apple interview question. Find all groups of users who share the same device IDs. The solution involves Depth First Search and data manipulation',
        'date': 'Aug 2021',
        'url':'content/account_w_shared_devices.html'
    },
    {
        'title':'Number of Valid Letter Combos',
        'tag': 'code',
        'description':'Coding interview problem asked by salesforce. The solution needs recursive functions to solve',
        'date':'Aug 2021',
        'url':'content/number_of_valid_letter_combos.html'
    }
]


function render_posts() {
    for (var k=0; k<data.length;k++) {
        post = data[k];

        var postCardDiv=document.createElement("div");
        postCardDiv.className="post-card"

        var urlDiv=document.createElement("a");
        urlDiv.href=post.url;
        urlDiv.target="_blank";
        
        var postTitleDiv=document.createElement("div");
        postTitleDiv.className="post-title";
        postTitleDiv.innerHTML=post.title;
        urlDiv.appendChild(postTitleDiv);

        var postTagDiv=document.createElement("div");
        postTagDiv.className="post-tag";
        postTagDiv.innerHTML=post.tag;
        urlDiv.appendChild(postTagDiv);

        var postDescDiv=document.createElement("div");
        postDescDiv.className="post-description";
        postDescDiv.innerHTML=post.description;
        urlDiv.appendChild(postDescDiv);

        var postDateDiv=document.createElement("div");
        postDateDiv.className="post-date";
        postDateDiv.innerHTML="Last Updated: " + post.date;
        urlDiv.appendChild(postDateDiv);

        postCardDiv.appendChild(urlDiv);
        
        document.getElementById("main-div").appendChild(postCardDiv)
    }
}