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
/*
    fetch('NavElelments/Nav.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Fetch error:', error));



    fetch('NavElelments/Headline.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('headline').innerHTML = data;
    })
    .catch(error => console.error('Fetch error:', error));



    fetch('NavElelments/Social.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('endCard').innerHTML = data;
    })
    .catch(error => console.error('Fetch error:', error));
    */

    function loadContent(url, elementId) {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Error loading ${url}: ${response.status}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Fetch error:', error));
    }
    
    loadContent('NavElement/Nav.html', 'nav-placeholder');
    loadContent('NavElement/Headline.html', 'headline');
    loadContent('NavElement/Social.html', 'endCard');