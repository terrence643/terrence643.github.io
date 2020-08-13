document.getElementsByClassName('Educform')[0].addEventListener('click', e => {
	e.preventDefault();
});
document.getElementsByClassName('Orgform')[0].addEventListener('click', e=>{
    e.preventDefault();
});
document.getElementsByClassName('Projform')[0].addEventListener('click', e=>{
    e.preventDefault();
})
document.getElementById('Logbutton').addEventListener('click', e=>{
    e.preventDefault();
})

function renderAbout(doc){
    let div = document.getElementById('textdivid');
    div.classList.add('textdivclass');
    div.setAttribute('data-id',doc.id)
    let editbutton=document.createElement('button');
    editbutton.classList.add('editer');
    editbutton.textContent="Edit";

    let textarea=document.createElement('textarea');
    textarea.classList.add('textbox');
    textarea.id='texts';
    textarea.style.width="800px";
    textarea.style.height="200px";
    let savebutton=document.createElement('button');
    savebutton.classList.add('savebut');
    let cancelbutton=document.createElement('button');
    cancelbutton.classList.add('cancelbut');
    savebutton.textContent="Save";
    cancelbutton.textContent="Cancel";
    let para = document.createElement('p');
    para.classList.add('paragraph')
    let checkdiv = document.createElement('div');


    para.textContent=doc.data().Intro;
    textarea.textContent=doc.data().Intro;

    div.appendChild(editbutton);
    div.appendChild(para);
    div.appendChild(textarea);
    div.appendChild(checkdiv);    
    div.appendChild(savebutton);
    div.appendChild(cancelbutton);

    document.getElementById('containerAbout').appendChild(div);
    editbutton.addEventListener('click', e=>{
        $('.paragraph').toggle();
        $('.textbox').toggle();
        $('.savebut').toggle();
        $('.cancelbut').toggle();
    })
    savebutton.addEventListener('click', e=>{
        let id=e.currentTarget.parentNode.getAttribute('data-id');
        db.collection("Introduction").doc(id).update({
            Intro: document.getElementById('texts').value
        }).then(function(){
            collectAbout();
        })
        
    })
    cancelbutton.addEventListener('click',e=>{
        collectAbout();
    })
}


function collectAbout(){
    document.getElementById('textdivid').innerHTML = '';
    db.collection("Introduction").get().then(function(snapshot) {
        snapshot.docs.forEach(function(doc){
            renderAbout(doc);
        })
    }).catch(function(Error){
        console.log(Error)
    });
}

function renderEduc(doc){
    
    let div = document.createElement('div');
    div.classList.add('ContainerEduc');
    let ex= document.createElement('button');
    let school=document.createElement('div');
    let degree=document.createElement('div');
    let year_start=document.createElement('div');
    let year_end=document.createElement('div');
    var button = ex;
    button.style.float = "right";
    button.style.backgroundColor="#ff6961";
    button.style.borderRadius ="20px 20px 20px 20px";

    div.setAttribute('data-id',doc.id);
    ex.textContent= 'x';
    school.textContent = "School: "+doc.data().school;
    degree.textContent = "Degree: "+doc.data().degree;
    year_start.textContent = "Year Started: "+doc.data().year_start;
    year_end.textContent = "Year Ended: "+doc.data().year_end;
  
    div.appendChild(ex);
    div.appendChild(school);  
    div.appendChild(degree);
    div.appendChild(year_start);
    div.appendChild(year_end);
    

    document.getElementById('Educ-list').appendChild(div);

    ex.addEventListener('click', function(e){
        e.stopPropagation();
        let id =e.target.parentElement.getAttribute('data-id');
        db.collection('education').doc(id).delete();
        collectEduc();
    })
}

function collectEduc(){
    document.getElementById('Educ-list').innerHTML ='';
    db.collection("education").get().then(function(snapshot) {
    snapshot.docs.forEach(function(doc){
        renderEduc(doc);
    })
}).catch(function(Error){
    console.log(Error)
});
}

function writeEduc(){
    db.collection('education').add({
        school: document.getElementById('Sname').value,
        degree: document.getElementById('Sdegree').value,
        year_start: parseInt(document.getElementById('Syear_start').value,10),
        year_end: parseInt(document.getElementById('Syear_end').value,10)
        
    }).then(function(r){
         collectEduc();
    }).catch(function(Error){
        console.log(Error)
    })
}




function renderOrg(doc){

    let org_div = document.createElement('div');
    org_div.classList.add('ContainerOrg');
    let orgex= document.createElement('button');
    let org=document.createElement('div');
    let position=document.createElement('div');
    let org_year_start=document.createElement('div');
    let org_year_end=document.createElement('div');

    var button = orgex;
    button.style.float = "right";
    button.style.backgroundColor="#ff6961";
    button.style.borderRadius ="20px 20px 20px 20px";

    org_div.setAttribute('data-id',doc.id);
    orgex.textContent= 'x';
    org.textContent = "Name: "+doc.data().name;
    position.textContent = "Position: "+doc.data().position;
    org_year_start.textContent = "Year Started: "+doc.data().year_start;
    org_year_end.textContent = "Year Ended: "+doc.data().year_end;


    org_div.appendChild(orgex);
    org_div.appendChild(org);
    org_div.appendChild(position);
    org_div.appendChild(org_year_start);
    org_div.appendChild(org_year_end);

    document.getElementById('Org-list').appendChild(org_div);

    orgex.addEventListener('click', function(e){
        e.stopPropagation();
        let id =e.target.parentElement.getAttribute('data-id');
        db.collection('organizations').doc(id).delete();
        collectOrg();
    })
}

function collectOrg(){
    document.getElementById('Org-list').innerHTML ='';
    db.collection("organizations").get().then(function(snapshot) {
        snapshot.docs.forEach(function(doc){
            renderOrg(doc);
        })
    }).catch(function(Error){
        console.log(Error)
    })
}

function writeOrg(){
    
    db.collection('organizations').add({
        name: document.getElementById('Oname').value,
        position: document.getElementById('Opos').value,
        year_start: parseInt(document.getElementById('Oyear_start').value,10),
        year_end: parseInt(document.getElementById('Oyear_end').value,10)
        
    }).then(function(r){
        collectOrg();
    }).catch(function(Error){
        console.log(Error)
    })
}





function renderProj(doc){

    let proj_anch_div= document.createElement('div');
    let proj_anch = document.createElement('a');
    proj_anch.href=doc.data().Link;
    let proj_div = document.createElement('div');
    proj_div.classList.add('ContainerProj');

    let projex= document.createElement('button');
    let name=document.createElement('div');
    let proj_year_start=document.createElement('div');
    let proj_year_end=document.createElement('div');

    proj_div.setAttribute('data-id',doc.id);

    var button = projex;
    button.style.float = "right";
    button.style.backgroundColor="#ff6961";
    button.style.borderRadius ="20px 20px 20px 20px";
// INNER HTML METHOD
//    proj_div.innerHTML += "URL/Project: <a href='"+doc.data().Link+"'>"+doc.data().Project+"</a>";
    projex.textContent= 'x';
    
    proj_div.textContent="Project: "+doc.data().Project;
    name.textContent = "Name: "+doc.data().name;
    proj_year_start.textContent = "Year Started: "+doc.data().year_start;
    proj_year_end.textContent = "Year Ended: "+doc.data().year_end;
    proj_anch_div.textContent="Click Here to download the file";


    proj_div.appendChild(projex);
    proj_div.appendChild(name);
    proj_div.appendChild(proj_year_start);
    proj_div.appendChild(proj_year_end);
    proj_anch.appendChild(proj_anch_div);
    proj_div.appendChild(proj_anch);

    document.getElementById('Proj-list').appendChild(proj_div);

    projex.addEventListener('click', function(e){
        e.stopPropagation();
        let id =e.target.parentElement.getAttribute('data-id');
        db.collection('works').doc(id).delete();
        collectProj()
    })
}

function collectProj(){
    document.getElementById('Proj-list').innerHTML ='';
    db.collection("works").get().then(function(snapshot) {
        snapshot.docs.forEach(function(doc){
            renderProj(doc);
        })
    }).catch(function(Error){
        console.log(Error)
    })
}
function writeProj(){
    db.collection('works').add({
        Link: document.getElementById('Plink').value,
        Project: document.getElementById('Pproj').value,
        name:document.getElementById('Pname').value,
        year_start: parseInt(document.getElementById('Pyear_start').value,10),
        year_end: parseInt(document.getElementById('Pyear_end').value,10)
        
    }).then(function(r){
        collectProj()
    }).catch(function(Error){
        console.log(Error)
    })
}
    

function rendercontact(doc){

    let con_anch = document.createElement('a');
    let con_anch_div=document.createElement('div');
    let editbutton=document.createElement('button');
    editbutton.classList.add('editer');
    editbutton.textContent="Edit";
    con_anch.href=doc.data().contact;
    let con_div = document.createElement('div');
    con_div.classList.add('Containercon');
    con_div.setAttribute('data-id',doc.id)
    let textarea=document.createElement('textarea');
    textarea.classList.add('textbox');
    textarea.id='textscont';
    let savebutton=document.createElement('button');
    savebutton.classList.add('savebut');
    let cancelbutton=document.createElement('button');
    cancelbutton.classList.add('cancelbut');
    savebutton.textContent="Save";
    cancelbutton.textContent="Cancel";
    
    
    textarea.textContent=doc.data().contact;
    let name=document.createElement('div');


    con_div.setAttribute('data-id',doc.id);
    con_div.textContent=doc.data().name;
    con_anch_div.textContent="Click here Contact Me";
    
    //con_div.innerHTML += " <a href='"+doc.data().contact+"'>"+doc.data().name+"</a>";
    con_div.textContent = doc.data().name;

    con_div.appendChild(editbutton);
    con_div.appendChild(textarea);
    con_div.appendChild(savebutton);
    con_div.appendChild(cancelbutton);
    con_anch.appendChild(con_anch_div);
    con_div.appendChild(name);
    con_div.appendChild(con_anch);

    document.getElementById('cont-list').appendChild(con_div);

    editbutton.addEventListener('click', e=>{
        $('.textbox').toggle();
        $('.savebut').toggle();
        $('.cancelbut').toggle();
    })

    savebutton.addEventListener('click', e=>{
        let id=e.currentTarget.parentNode.getAttribute('data-id');
        db.collection("Contact").doc(id).update({
            contact: document.getElementById('textscont').value
        }).then(function(){
            collectContact();
        })
        
    })
    cancelbutton.addEventListener('click',e=>{
        collectContact();
    })
}



function collectContact(){
    document.getElementById('cont-list').innerHTML = '';
    db.collection("Contact").get().then(function(snapshot) {
    snapshot.docs.forEach(function(doc){
        rendercontact(doc);
    })
}).catch(function(Error){
    console.log(Error)
})
}


function authentication(){

    var email=document.getElementById('username').value
    var password=document.getElementById('pass').value

    firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        alert("user signed in");

        var user= firebase.auth().currentUser;
        if (user!=null){
            collectAbout();
            collectEduc();
            collectOrg();
            collectProj();
            collectContact();
            
            
            $('#Logged').toggle();
            $('#Login').toggle();
        }
     }).catch(function(error){
         if(error.code=="auth/wrong-password")
            alert("wrong password")
        else
            alert(error.message);
     });
}
