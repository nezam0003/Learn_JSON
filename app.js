  const btn = document.getElementById('btn');
  btn.addEventListener('click', makeRequest);

  function makeRequest() {
      // Create XMLHttpRequest object
      const xhr = new XMLHttpRequest();
      // Open XMLHttpRequest function
      xhr.open('GET', "data.json", true);
      //   xhr.responseType = "json";
      xhr.onload = () => {
          if (xhr.status === 200) {
              console.log(xhr.responseText);
              const response = JSON.parse(xhr.responseText);
              console.log(response);
              const employees = response.employee;
              let showEmployee = "";
              for (let i = 0; i < employees.length; i++) {
                  showEmployee += employees[i].name;
              }
              console.log(showEmployee);
          } else {
              console.log('error occured');
          }
      }
      xhr.send();


  }