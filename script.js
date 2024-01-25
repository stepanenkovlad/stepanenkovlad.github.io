let dict = [
  {
    name: "frontend",
    items: [
      {
        lang: "javascript",
        img: "img/js.png",
        ide: [
          {
            title: "vscode",
            img: "img/vscode.png",
            href: "https://code.visualstudio.com/",
          },
          {
            title: "sublimetext",
            img: "img/sublime.png",
            href: "https://www.sublimetext.com/",
          },
        ],
        frame: [
          {
            title: "react",
            img: "img/react.png",
          },
        ],
      },
    ],
  },

  {
    name: "backend",
    items: [
      {
        lang: "python",
        img: "img/py.png",
        ide: [
          {
            title: "pycharm",
            img: "img/PyCharm.png",
            href: "https://www.jetbrains.com/ru-ru/pycharm/",
          },
        ],
        frame: [
          {
            title: "django",
            img: "img/Django.png",
            href: "https://www.djangoproject.com/download/",
          },
        ],
      },
      {
        lang: "php",
        img: "img/php.png",
        ide: [
          {
            title: "phpstorm",
            img: "img/PhpStorm.jpeg",
            href: "",
          },
        ],
        frame: [
          {
            title: "laravel",
            img: "img/Laravel.png",
            href: "",
          },
        ],
      },
      {
        lang: "java",
        img: "img/java.png",
        ide: [
          {
            title: "intellij",
            img: "img/intelliJ.jpeg",
            href: "",
          },
        ],
        frame: [
          {
            title: "spring",
            img: "img/spring.png",
            href: "",
          },
        ],
      },
    ],
  },
  {
    name: "qa",
    items: [
      {
        lang: "python",
        img: "img/py.png",
        ide: {
          title: "pycharm",
          img: "img/PyCharm.png",
          href: "",
        },
        frame: {
          title: "django",
          img: "img/Django.png",
          href: "",
        },
      },
      {
        lang: "java",
        img: "img/java.png",
        ide: [
          {
            title: "intellij",
            img: "img/intelliJ.jpeg",
            href: "",
          },
        ],
        frame: [
          {
            title: "spring",
            img: "img/Spring.jpg",
            href: "",
          },
        ],
      },
      {
        lang: "c#",
        img: "img/ccc.png",
        ide: {
          title: "vscode",
          img: "img/vscode.png",
          href: "",
        },
        biblio: {
          title: "automapper",
          img: "img/AutoMapper.jpeg",
          href: "",
        },
      },
    ],
  },
  {
    name: "uiux",
    items: [
      {
        lang: "html",
        img: "img/Html.png",
        frame: {
          title: "tailwald",
          img: "img/tailwald.png",
          href: "",
        },
      },
      {
        lang: "css",
        img: "img/css.png",
        ide: {
          title: "vscode",
          img: "img/vscode.png",
          href: "",
        },
        frame: {
          title: "bootstrap",
          img: "img/bootstrap.png",
          href: "",
        },
      },
    ],
  },
  {
    name: "mobile",
    items: [
      {
        lang: "kotlin",
        img: "img/kotlin.png",

        frame: {
          title: "ktor",
          img: "img/ktor.png",
        },
      },
      {
        lang: "java",
        img: "img/java.png",
        ide: [
          {
            title: "intellij",
            img: "img/intelliJ.jpeg",
          },
        ],
        frame: [
          {
            title: "spring",
            img: "img/Spring.jpg",
          },
        ],
      },
      {
        lang: "swift",
        img: "img/swift.png",
        ide: {
          title: "xcode",
          img: "img/Xcode.png",
        },
        biblio: {
          title: "alamofire",
          img: "img/Alamofire.jpeg",
        },
      },
    ],
  },
  {
    name: "devops",
    items: [
      {
        lang: "python",
        img: "img/py.png",
        ide: {
          title: "pycharm",
          img: "img/PyCharm.png",
        },
        frame: {
          title: "django",
          img: "img/Django.png",
        },
      },
      {
        lang: "java",
        img: "img/java.png",
        ide: [
          {
            title: "intellij",
            img: "img/intelliJ.jpeg",
          },
        ],
        frame: [
          {
            title: "spring",
            img: "img/Spring.jpg",
          },
        ],
      },
      {
        lang: "golang",
        img: "img/golang.png",
        ide: [
          {
            title: "VSCode",
            img: "img/vscode.png",
          },
        ],
        frame: [
          {
            title: "Beego",
            img: "img/Beego.png",
          },
        ],
      },
    ],
  },
];

const wrapperSphere = document.querySelector(".sphere-choice");
const sectionSphere = document.querySelector(".sphere");
const sectionLang = document.querySelector(".lang");
const langList = document.querySelector(".lang-choice");
const sectionIde = document.querySelector(".ide");
const ideList = document.querySelector(".ide-choice");
const bigTitle = document.querySelector(".sph-lang");
const sectionFrame = document.querySelector(".frame");
const frameList = document.querySelector(".frame-choice");

let globalSphere;
let globalLang;
let langEL;

wrapperSphere.addEventListener("click", findId);
langList.addEventListener("click", findLang);
langList.addEventListener("click", showIde);

function findId(e) {
  if (e.target.dataset.action != "getId") {
    return;
  }

  globalSphere = e.target.id;
  sectionSphere.style.display = "none";
  sectionLang.style.display = "block";

  showLang(globalSphere);
}

function findLang(e) {
  if (e.target.dataset.action != "getId") {
    return;
  }
  globalLang = e.target.id;
}

function showLang() {
  sphereEl = dict.filter((el) => el.name == globalSphere);
  sphereEl = sphereEl[0];
  console.log(sphereEl);
  sphereEl.items.forEach((el) => {
    let resHtml = `<button class="box-choice__item lang-choice__item" data-action="getId" id="${el.lang}">
  <img src="${el.img}" alt="" />
  <p>${el.lang}</p>
</button>
</div>`;

    langList.insertAdjacentHTML("beforeend", resHtml);
  });
}

function showIde(e) {
  if (e.target.dataset.action != "getId") {
    return;
  }
  sectionIde.style.display = "block";
  sectionLang.style.display = "none";
  let text = `${globalSphere}-${globalLang}`;
  bigTitle.insertAdjacentHTML("beforeend", text);

  let langEL = sphereEl.items.filter((el) => el.lang == globalLang);
  langEL = langEL[0];
  langEL.ide.forEach((el) => {
    let resHtml = `<button class="box-choice__item">
    <a href=${el.href}>
      <img src=${el.img} alt="" />
      <p>${el.title}</p>
    </a>
  </button>`;

    ideList.insertAdjacentHTML("beforeend", resHtml);
  });

  showFrame();
}

function showFrame(e) {
  sectionFrame.style.display = "block";

  let langEL = sphereEl.items.filter((el) => el.lang == globalLang);
  langEL = langEL[0];
  langEL.frame.forEach((el) => {
    let resHtml = `<button class="box-choice__item">
    <a href=${el.href}>
      <img src=${el.img} alt="" />
      <p>${el.title}</p>
    </a>
  </button>`;

    frameList.insertAdjacentHTML("beforeend", resHtml);
  });
}

function showMainScreen() {
  sectionSphere.style.display = "block";
  sectionLang.style.display = "none";
}
