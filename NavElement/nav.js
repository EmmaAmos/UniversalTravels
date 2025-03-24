//Nav Fetch

/*
    fetch('/Nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
        fetch('/Headline.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headline').innerHTML = data;
        });

    fetch('/Social.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('endCard').innerHTML = data;
        });
*/

    
    fetch('/Nav.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Fetch error:', error));


    fetch('/Headline.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('headline').innerHTML = data;
    })
    .catch(error => console.error('Fetch error:', error));

    

    fetch('/Social.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('endCard').innerHTML = data;
    })
    .catch(error => console.error('Fetch error:', error));