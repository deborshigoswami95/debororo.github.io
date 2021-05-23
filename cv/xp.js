document.body.onload = render_xp;

function render_xp () {

  $.getJSON("https://raw.githubusercontent.com/deborshigoswami95/resume/master/xp.json", function(data){

    for (var k=0; k<data.length;k++) {
      var xp = data[k];

      var xpDivCard = document.createElement("div");
      xpDivCard.className = "xp-card"

      var companyDiv = document.createElement("h3");
      companyDiv.innerHTML = xp.company;
      companyDiv.className = "company-name";
      xpDivCard.appendChild(companyDiv);

      var locationP = document.createElement("p");
      locationP.innerHTML = xp.location;
      locationP.className = "company-location"
      xpDivCard.appendChild(locationP);

      var roles = xp.roles;

      for (var i=0; i<roles.length; i++) {
        var role = roles[i];

        var roleDiv = document.createElement("div");
        roleDiv.className = "role";

        var roleTitle = document.createElement("h4");
        roleTitle.innerHTML = role.role;
        roleTitle.className = "role-title";
        roleDiv.appendChild(roleTitle);

        var roleDate = document.createElement("p");
        roleDate.innerHTML = role.role_date;
        roleDate.className = "role-date";
        roleDiv.appendChild(roleDate);

        var roleDescriptions = document.createElement("ul");
        roleDescriptions.className = "role-description";
        for (var j=0;j<role.description.length;j++) {
          var liDesc = document.createElement("li");
          liDesc.innerHTML = role.description[j];
          roleDescriptions.appendChild(liDesc);
        }
        roleDiv.appendChild(roleDescriptions);
        xpDivCard.appendChild(roleDiv);
      }


      document.getElementById("xp-details").appendChild(xpDivCard)
    }

  })

}
