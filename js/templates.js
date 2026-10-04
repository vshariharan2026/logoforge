const logoTemplates = [

function modernLogo(data){

return `

<div class="logo-card">

    <div class="logo-icon">

        <i class="fa-solid ${data.icon}"></i>

    </div>

    <h1>${data.name}</h1>

    <p>${data.tagline}</p>

</div>

`;

}

];