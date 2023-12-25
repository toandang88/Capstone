export function clickCancel() {
  document.getElementById("lnk_cancelEdit").addEventListener("click", event => {
    event.preventDefault();
    window.location.href = "/Profile";
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
