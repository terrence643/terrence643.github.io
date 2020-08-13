function renderAbout(doc){
    let div = document.getElementById('textdivid');
    div.classList.add('textdivclass');
    div.setAttribute('data-id',doc.id)
    let para = document.createElement('p');
    para.classList.add('paragraph')
    let checkdiv = document.createElement('div');


    para.textContent=doc.data().Intro;

    div.appendChild(para);
    div.appendChild(checkdiv);    


    document.getElementById('containerAbout').appendChild(div);

}

db.collection("Introduction").get().then(function(snapshot) {
    snapshot.docs.forEach(function(doc){
        renderAbout(doc);
    })
}).catch(function(Error){
    console.log(Error)
});

function renderEduc(doc){
    
    let div = document.createElement('div');
    div.classList.add('ContainerEduc');
    let school=document.createElement('div');
    let degree=document.createElement('div');
    let year_start=document.createElement('div');
    let year_end=document.createElement('div');

 
    div.setAttribute('data-id',doc.id);
    school.textContent = "School: "+doc.data().school;
    degree.textContent = "Degree: "+doc.data().degree;
    year_start.textContent = "Year Started: "+doc.data().year_start;
    year_end.textContent = "Year Ended: "+doc.data().year_end;
  

    div.appendChild(school);  
    div.appendChild(degree);
    div.appendChild(year_start);
    div.appendChild(year_end);
    

    document.getElementById('Educ-list').appendChild(div);

}

db.collection("education").get().then(function(snapshot) {
    snapshot.docs.forEach(function(doc){
        renderEduc(doc);
    })
}).catch(function(Error){
    console.log(Error)
});

function renderOrg(doc){

    let org_div = document.createElement('div');
    org_div.classList.add('ContainerOrg');
    let org=document.createElement('div');
    let position=document.createElement('div');
    let org_year_start=document.createElement('div');
    let org_year_end=document.createElement('div');


    org_div.setAttribute('data-id',doc.id);
    org.textContent = "Name: "+doc.data().name;
    position.textContent = "Position: "+doc.data().position;
    org_year_start.textContent = "Year Started: "+doc.data().year_start;
    org_year_end.textContent = "Year Ended: "+doc.data().year_end;


    org_div.appendChild(org);
    org_div.appendChild(position);
    org_div.appendChild(org_year_start);
    org_div.appendChild(org_year_end);

    document.getElementById('Org-list').appendChild(org_div);
}

db.collection("organizations").get().then(function(snapshot) {
    snapshot.docs.forEach(function(doc){
        renderOrg(doc);
    })
}).catch(function(Error){
    console.log(Error)
})



function renderProj(doc){

    let proj_anch_div= document.createElement('div');
    let proj_anch = document.createElement('a');
    proj_anch.href=doc.data().Link;
    let proj_div = document.createElement('div');
    proj_div.classList.add('ContainerProj');

    let name=document.createElement('div');
    let proj_year_start=document.createElement('div');
    let proj_year_end=document.createElement('div');

    proj_div.setAttribute('data-id',doc.id);

    
    proj_div.textContent="Project: "+doc.data().Project;
    name.textContent = "Name: "+doc.data().name;
    proj_year_start.textContent = "Year Started: "+doc.data().year_start;
    proj_year_end.textContent = "Year Ended: "+doc.data().year_end;
    proj_anch_div.textContent="Click Here to download the file";


    proj_div.appendChild(name);
    proj_div.appendChild(proj_year_start);
    proj_div.appendChild(proj_year_end);
    proj_anch.appendChild(proj_anch_div);
    proj_div.appendChild(proj_anch);

    document.getElementById('Proj-list').appendChild(proj_div);

}

db.collection("works").get().then(function(snapshot) {
    snapshot.docs.forEach(function(doc){
        renderProj(doc);
    })
}).catch(function(Error){
    console.log(Error)
})


function rendercontact(doc){

    let con_anch = document.createElement('a');
    let con_anch_div=document.createElement('div');
    con_anch.href=doc.data().contact;
    let con_div = document.createElement('div');
    con_div.classList.add('Containercon');
    con_div.setAttribute('data-id',doc.id)
    
    
    let name=document.createElement('div');


    con_div.setAttribute('data-id',doc.id);
    con_div.textContent=doc.data().name;
    con_anch_div.textContent="Click here Contact Me";
    
    //con_div.innerHTML += " <a href='"+doc.data().contact+"'>"+doc.data().name+"</a>";
    con_div.textContent = doc.data().name;

    con_anch.appendChild(con_anch_div);
    con_div.appendChild(name);
    con_div.appendChild(con_anch);

    document.getElementById('cont-list').appendChild(con_div);

}

db.collection("Contact").get().then(function(snapshot) {
    snapshot.docs.forEach(function(doc){
        rendercontact(doc);
    })
}).catch(function(Error){
    console.log(Error)
})

