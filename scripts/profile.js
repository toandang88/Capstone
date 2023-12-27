export function editProfile() {
  const content1 = document.getElementById("usr_data");
  const content2 = document.getElementById("usr_dataEdit");
  const lnkEdit = document.getElementById("lnk_edit");
  const lnkCancelEdit = document.getElementById("lnk_cancelEdit");

  function profileview() {
    content1.style.display = "flex";
    content2.style.display = "none";
  }

  function profileEdit() {
    content1.style.display = "none";
    content2.style.display = "flex";
    loadStates();
  }

  profileview();

  lnkEdit.addEventListener("click", profileEdit);
  lnkCancelEdit.addEventListener("click", profileview);

  // Event listener for form submission
  document
    .getElementById("usr_data")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      profileview();
    });
}

export function uploadImage() {
  document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");
    const uploadButton = document.getElementById("uploadButton");

    document.addEventListener("click", function(event) {
      if (event.target.id === "uploadButton") {
        fileInput.click();
      }
    });

    fileInput.addEventListener("change", function(event) {
      const form = document.getElementById("imageUpload");
      event.preventDefault();
      form.submit();
      uploadButton.style.display = "none";
    });
  });
}

export function loadStates() {
  const usStates = [
    "--Select--",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  const stateSelect = document.getElementById("slt_states");
  if (stateSelect) {
    usStates.forEach(state => {
      const option = document.createElement("option");
      option.value = state;
      option.text = state;
      stateSelect.add(option);
    });
  }
}
