// DOM Maniuplation
let voteInfo = document.querySelector(".vote_info span");
let candidatePosition = document.querySelector(".candidate_position span");
let candidateMisc = document.querySelector(".candidate_misc");
let btnInfo = document.querySelector(".btn_info");
let candidateImage = document.querySelector(".candidate_image");
let candidateNumber = document.querySelector(".candidate_number");

let currentCandidate = 0;
let currentNumber = "";
let nullAction = true;

//keyboard actions
const clicked = (n) => {
  const number = document.querySelector(".number.blinking_digit");
  if (number != null) {
    number.innerHTML = n;
    currentNumber = `${currentNumber}${n}`;

    number.classList.remove("blinking_digit");
    if (number.nextElementSibling != null) {
      number.nextElementSibling.classList.add("blinking_digit");
    } else {
      interfaceRefresh();
    }
  }
};
const nullVote = () => {
  if (currentNumber === "") {
    nullAction = true;
    voteInfo.style.display = "block";
    btnInfo.style.display = "block";
    candidateMisc.innerHTML =
      '<div class="nullWarning blinking_digit"> VOTO EM BRANCO </div>';
    candidateNumber.innerHTML = "";
    alert("Para confirmar seu voto em BRANCO aperte CONFIRMA");
  } else {
    alert(
      "Para votar em BRANCO pressione CORRIGE para limpar a tela e vote em BRANCO"
    );
  }
};
const clearVote = () => {
  init();
};
const checkVote = () => {
  const candidate = candidates[currentCandidate];
  let confirmedVote = false;

  if (nullAction === true) {
    confirmedVote = true;
  } else if (currentNumber.length === candidate.digits) {
    confirmedVote = true;
  }

  if (confirmedVote) {
    document.querySelector(".display").innerHTML =
      '<div class="endWarning blinking_digit">FIM</div>';
    alert("Seu voto foi computado obrigado por votar");
  }
};

function init() {
  const candidate = candidates[currentCandidate];

  let numberRenderHtml = "";
  currentNumber = "";
  nullAction = false;

  for (let i = 0; i < candidate.digits; i++) {
    if (i === 0) {
      numberRenderHtml += '<div class="number blinking_digit"></div>';
    } else {
      numberRenderHtml += '<div class="number"></div>';
    }
  }

  voteInfo.style.display = "none";
  candidatePosition.innerHTML = candidate.postion;
  candidateMisc.innerHTML = "";
  btnInfo.style.display = "none";
  candidateImage.innerHTML = "";
  candidateNumber.innerHTML = numberRenderHtml;
}

const interfaceRefresh = () => {
  const candidate = candidates[currentCandidate];
  let candidateFech = candidate.candidates.filter((candidate) => {
    if (candidate.number === currentNumber) {
      return true;
    } else {
      return false;
    }
  });
  if (candidateFech.length > 0) {
    candidateFech = candidateFech[0];
    voteInfo.style.display = "block";
    btnInfo.style.display = "block";
    candidateMisc.innerHTML = `Nome: ${candidateFech.name} <br/> Partido: ${candidateFech.party}`;

    let imageHtml = "";
    for (let i in candidateFech.candidatePicture) {
      imageHtml += `<div class="candidate_image"> <img src="images/${candidateFech.candidatePicture[i].url}"  alt="" />
    </div>`;
    }
    candidateImage.innerHTML = imageHtml;
  } else {
    voteInfo.style.display = "block";
    btnInfo.style.display = "block";
    candidateMisc.innerHTML =
      '<div class="nullWarning blinking_digit"> VOTO NULO </div>';
  }
};

init();
