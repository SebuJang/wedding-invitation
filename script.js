const invitationData = {
  assetVersion: "20260322-1654",
  heroBadge: "Wedding Invitation",
  heroNames: ["장세범", "김나영"],
  dateLine: "2026년 4월 25일 토요일",
  venueLine: "오후 12시부터 · WWL Studio",
  message: [
    "안녕하세요.\n나영, 세범입니다.",
    "스타트업에서 기획자와 개발자로 만난 저희가\n약 1,000일의 연애를 마치고\n이제 부부로서의 삶을 시작해보려고 합니다.",
    "새로운 시작에 앞서\n소중한 지인 분들을 모시고 인사 드리려 하니,",
    "따뜻한 봄 날에 자리해주시어\n응원과 축하해주시면 감사드리겠습니다.",
  ],
  spotlightEyebrow: "Dress Code",
  spotlightTitle: "드레스 코드",
  spotlightText:
  "예식장이 아니니 조금 더 자유롭게 오셔도 좋습니다.\n평소 아껴두었던 옷을 신나게 입어주세요.\n봄날이니 화사하게 만나볼까요?",
  heroImage: "./final-selected-photos/photo1.jpg",
  inlinePhotos: {
    intro: "./final-selected-photos/photo2.png",
    spotlight: "./final-selected-photos/photo3.jpg",
    bottom: "./final-selected-photos/photo4.JPG",
  },
  event: {
    date: "2026년 4월 25일 토요일",
    time: "오후 12시 웰컴 티타임 · 오후 1시 결혼 선언식",
    venue: "WWL Studio",
    address: "서울특별시 서대문구 연희동 95-10",
    address2: "WWL Studio\n서울특별시 서대문구 연희동 95-10",
  },
  timeline: [
    {
      time: "12:00 - 13:00",
      title: "웰컴 티타임, 1차 포토타임",
      body: "커피 한 잔과 함께 먼저 인사를 나누고,<br>여유로이 사진을 남기는 시간입니다.",
    },
    {
      time: "13:00 - 13:30",
      title: "결혼 선언식",
      body: "두 사람의 시작을 함께 지켜봐 주시는<br>가장 중요한 시간입니다.",
    },
    {
      time: "13:30 - 15:00",
      title: "식사, 2차 포토타임",
      body: "식사와 대화를 편하게 즐기면서<br>1차에 못 담은 사진들을 남기는 시간입니다.",
    },
  ],
  // rsvpCopy:
  //   "행사 준비를 위해 참석 여부를 남겨주시면 감사드리겠습니다.",
  rsvpParkingNote:
    "식사와 함께 가볍게 술도 즐기는 시간을 생각하고 있어요. 가능하시면 차량은 두고 와 주시면 감사하겠습니다. 사실은 주차장이 협소해요... ㅠㅠ",
  mapLinks: {
    naver: "https://naver.me/5Ol47Eyn",
    kakao: "https://kko.to/D9VhcHSBEU",
  },
  rsvpEndpoint:
    "https://script.google.com/macros/s/AKfycby3Oey8lcUdT_dRVGFLkHE_hWebJpjEtrvZe7jT4MsYiRpJfvP83vumkXwTZFgfNCABTQ/exec",
  studioGuideCopy: "주택가라 교통이 불편한 점 미리 양해 부탁드립니다.",
  studioGuide: [
    "홍대입구역에서 대중교통으로 약 20분 정도 소요됩니다.",
    "홍대입구역 중앙 버스 정류장에서 7734, 7612, 7739 버스를 이용해 주세요.",
    "'연희동자치회관' 에서 하차해 주세요.",
    "연희중앙교회 골목으로 들어오신 뒤, 스튜디오까지 도보로 이동해 주세요.",
  ],
  parkingAddress: "기업은행 연희동점\n서울시 서대문구 연희로 141",
  parkingGuide: [
    "기업은행 건물 좌측 지하주차장을 이용해주세요.",
    "주차장에서 스튜디오까지는 도보 5분 거리입니다.",
    "주차 공간 확보를 위해 차량 이용시 반드시 참석 여부에서 '이용 예정'을 선택해주세요.",
  ],
  parkingMap: {
    image: "./parking-map.jpg",
  },
  accounts: [
    {
      label: "신부",
      name: "김나영",
      bank: "카카오뱅크",
      number: "3333-06-1514021",
    },
    {
      label: "신랑",
      name: "장세범",
      bank: "카카오뱅크",
      number: "3333-01-1407417",
    },
  ],
  footerTitle: "함께해 주시는 마음을\n오래 기억하겠습니다",
  footerText:
    "귀한 걸음과 따뜻한 축하에 깊이 감사드립니다.",
};

const byId = (id) => document.getElementById(id);

const setText = (id, value) => {
  const node = byId(id);
  if (node) {
    node.textContent = value;
  }
};

const withAssetVersion = (path) => `${path}?v=${invitationData.assetVersion}`;

const applyContent = () => {
  setText("hero-badge", invitationData.heroBadge);
  byId("hero-title").innerHTML = invitationData.heroNames
    .map((name) => `<span class="hero__name">${name}</span>`)
    .join('<span class="hero__divider" aria-hidden="true"></span>');
  setText("hero-date", invitationData.dateLine);
  setText("hero-venue", invitationData.venueLine);
  setText("spotlight-eyebrow", invitationData.spotlightEyebrow);
  setText("spotlight-title", invitationData.spotlightTitle);
  setText("spotlight-text", invitationData.spotlightText);
  setText("event-date", invitationData.event.date);
  setText("event-time", invitationData.event.time);
  setText("event-venue", invitationData.event.venue);
  setText("event-address", invitationData.event.address);
  // setText("rsvp-copy", invitationData.rsvpCopy);
  setText("rsvp-parking-note", invitationData.rsvpParkingNote);
  setText("studio-guide-address", invitationData.event.address2);
  setText("studio-guide-copy", invitationData.studioGuideCopy);
  setText("parking-address", invitationData.parkingAddress);
  setText("parking-map-note", invitationData.parkingMap.note);
  setText("footer-title", invitationData.footerTitle);
  setText("footer-text", invitationData.footerText);

  byId("hero-image").src = withAssetVersion(invitationData.heroImage);
  byId("photo-inline-intro").src = withAssetVersion(invitationData.inlinePhotos.intro);
  byId("photo-inline-spotlight").src = withAssetVersion(invitationData.inlinePhotos.spotlight);
  byId("photo-inline-bottom").src = withAssetVersion(invitationData.inlinePhotos.bottom);
  byId("parking-map-image").src = withAssetVersion(invitationData.parkingMap.image);
  byId("naver-map-link").href = invitationData.mapLinks.naver;
  byId("kakao-map-link").href = invitationData.mapLinks.kakao;
};

const renderInvitationMessage = () => {
  const container = byId("invitation-message");
  container.textContent = "";

  invitationData.message.forEach((paragraph) => {
    const node = document.createElement("p");
    node.textContent = paragraph;
    container.appendChild(node);
  });
};

const renderTextList = (id, items, className = "") => {
  const container = byId(id);
  container.textContent = "";

  items.forEach((item) => {
    const entry = document.createElement("li");
    if (className) {
      entry.className = className;
    }
    entry.textContent = item;
    container.appendChild(entry);
  });
};

const renderTimeline = () => {
  const container = byId("timeline-list");
  container.textContent = "";
  invitationData.timeline.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline__item";
    row.innerHTML = `
      <div class="timeline__time">${item.time}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>
    `;
    container.appendChild(row);
  });
};

const renderGuides = () => {
  renderTextList("studio-guide-list", invitationData.studioGuide);
  renderTextList("parking-guide-list", invitationData.parkingGuide);
};

const renderAccounts = () => {
  const container = byId("account-grid");
  container.textContent = "";
  invitationData.accounts.forEach((item) => {
    const article = document.createElement("article");
    article.className = "account-card";
    article.innerHTML = `
      <div class="account-card__copy">
        <div class="account-card__inline">
          <span class="account-card__role">${item.label}</span>
          <strong class="account-card__name">${item.name}</strong>
          <span class="account-card__separator" aria-hidden="true">·</span>
          <span class="account-card__bank">${item.bank}</span>
          <span class="account-card__number">${item.number}</span>
        </div>
      </div>
      <button type="button" data-account="${item.number}">복사</button>
    `;
    container.appendChild(article);
  });
};

const copyAccountNumber = async (number, button) => {
  try {
    await navigator.clipboard.writeText(number);
    const previous = button.textContent;
    button.textContent = "복사됨";
    window.setTimeout(() => {
      button.textContent = previous;
    }, 1400);
  } catch (error) {
    window.alert("계좌번호 복사에 실패했습니다. 직접 길게 눌러 복사해 주세요.");
  }
};

const initAccountCopy = () => {
  document.querySelectorAll("[data-account]").forEach((button) => {
    button.addEventListener("click", () => copyAccountNumber(button.dataset.account, button));
  });
};

const setStatus = (message, type = "") => {
  const node = byId("rsvp-status");
  node.textContent = message;
  node.className = "rsvp-form__status";
  if (type) {
    node.classList.add(type);
  }
};

const toggleRsvpDependentFields = () => {
  const attendance = document.querySelector('input[name="attendance"]:checked')?.value;
  const isAttending = attendance === "참석";
  const guestsField = byId("rsvp-guests");
  const parkingField = byId("parking-field");
  const mealField = byId("meal-field");
  const guestWrapper = guestsField.closest(".field");

  guestsField.disabled = !isAttending;
  guestsField.required = false;
  if (isAttending && !guestsField.value) {
    guestsField.value = "0";
  }
  if (!isAttending) {
    guestsField.value = "0";
  }

  document.querySelectorAll('input[name="parking"]').forEach((radio) => {
    radio.disabled = !isAttending;
    radio.required = isAttending;
    if (!isAttending) {
      radio.checked = false;
    }
  });

  document.querySelectorAll('input[name="meal"]').forEach((radio) => {
    radio.disabled = !isAttending;
    radio.required = isAttending;
    if (!isAttending) {
      radio.checked = false;
    }
  });

  if (isAttending) {
    const defaultParking = byId("parking-no");
    const defaultMeal = byId("meal-yes");

    if (!document.querySelector('input[name="parking"]:checked')) {
      defaultParking.checked = true;
    }

    if (!document.querySelector('input[name="meal"]:checked')) {
      defaultMeal.checked = true;
    }
  }

  guestWrapper.classList.toggle("is-disabled", !isAttending);
  mealField.classList.toggle("is-disabled", !isAttending);
  parkingField.classList.toggle("is-disabled", !isAttending);
};

const initPhoneInput = () => {
  const phoneField = byId("rsvp-phone");
  phoneField.addEventListener("input", () => {
    phoneField.value = phoneField.value.replace(/\D/g, "").slice(0, 4);
  });
};

const submitRsvp = async (event) => {
  event.preventDefault();

  const submitButton = byId("rsvp-submit");
  const form = event.currentTarget;
  const formData = new FormData(form);

  if (!formData.has("guestCount")) {
    formData.append("guestCount", "0");
  }

  formData.append("wedding", "장세범 & 김나영");
  formData.append("eventDate", "2026-04-25 12:00");
  formData.append("venue", "WWL Studio");

  submitButton.disabled = true;
  setStatus("전송 중입니다.");

  if (!invitationData.rsvpEndpoint) {
    window.setTimeout(() => {
      submitButton.disabled = false;
      setStatus("구글 스프레드시트 웹앱 URL을 연결하면 실제 저장이 시작됩니다.", "is-error");
    }, 500);
    return;
  }

  try {
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, value));

    await fetch(invitationData.rsvpEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body.toString(),
    });

    form.reset();
    toggleRsvpDependentFields();
    setStatus("참석 여부가 접수되었습니다. 감사합니다.", "is-success");
  } catch (error) {
    setStatus("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.", "is-error");
  } finally {
    submitButton.disabled = false;
  }
};

const initRsvpForm = () => {
  byId("rsvp-form").addEventListener("submit", submitRsvp);
  initPhoneInput();
  document.querySelectorAll('input[name="attendance"]').forEach((radio) => {
    radio.addEventListener("change", toggleRsvpDependentFields);
  });
  toggleRsvpDependentFields();
};

const initReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));
};

applyContent();
renderInvitationMessage();
renderTimeline();
renderGuides();
renderAccounts();
initAccountCopy();
initRsvpForm();
initReveal();
