//Nav Fetch
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