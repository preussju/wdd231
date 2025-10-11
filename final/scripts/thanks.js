const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p><strong> nickname > </strong>${myInfo.get('first')}</p>
<p><strong> movie > </strong> ${myInfo.get('movie')}</p>
<p><strong> rating > </strong>${myInfo.get('rating')}</p>  
<p><strong> review > </strong> ${myInfo.get('description')}</p>
<p><strong> Your email > </strong>${myInfo.get('email')}</p> 
<p></p>
<p>${myInfo.get('formTimestamp')}</p> ` 

