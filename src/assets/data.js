export const data = [
  {
    title: "React Native Hava Durumu Klon Uygulaması",
    href: "https://github.com/mustafasnr/React-Native-Weather-App-Clone",
    uri: "./havadurumu.jpeg",
    description:
      "Meteoroloji Genel Müdürlüğü'nün kendi mobil uygulamasını react native ile klon uygulamasını yaptım, statik olarak tasarladığım uygulamada açılıp kapanan bilgi kutuları, geçişli arka plan için linear gradient ve ikonlar için svg paketlerini kullandım. Ek olarak ekranın sağından ve solundan açılan drawer menüler kullandım.",
  },
  {
    title: "React Native XOX Oyunu",
    href: "https://github.com/mustafasnr/React-Native-XOX-Game",
    uri: "./xox.gif",
    description:
      "React native'de animasyonların çalışma mantığını anlamak ve pratik yapmak için geliştirdiğim bu uygulamada state hooklarını kullanarak oyunun bitip bitmediğini kontrol ettim.",
  },
  {
    title: "React Native + FS ile Günlük Burç Yorumu Uygulaması",
    href: "https://github.com/mustafasnr/React-Native-Zodiac-App",
    uri: "./zodiac.jpeg",
    description:
      "React native ve Google Firestore veri tabanını bir arada kullandığım bu uygulamada günlük olarak veri tabanında bulunan yorumları internetten yükleyerek telefonun depolama alanına json olarak kaydettim. O güne ait verilerin navigation route parametreleriyle taşıyarak, oluşturduğum arayüzde gösteren bir uygulama yaptım. Uygulamaya verileri yüklemek için basit bir html sayfası tasarladım form ile girilen verileri oluşturduğum fonksiyonla bulunulan günün altında bir koleksiyon oluşturarak depolama işlemini yapıyor.",
  },
  {
    title: "React Native + FS ile TODO Uygulaması 1",
    href: "https://github.com/mustafasnr/React-Native-ToDo-App",
    uri: "./todo1.jpeg",
    description:
      "Yine react native ve Google Firestore veri tabanını kullanarak oluşturduğum bu uygulamada, todo oluşturma, düzenleme ve silme işlemlerini anlık olarak veri tabanında uyguladım, verilerimi anlık olarak uygulamada kontrol etmek için genel bir state hook'u ile bellek üzerinde kopya değerler oluşturdum. Bu değerler üzerinde ekranda gözüken kartlarını ve arayüzünü yaptım.",
  },
  {
    title: "React Native + Redux + FS ile TODO Uygulaması 2",
    href: "https://github.com/mustafasnr/React-Native-ToDo-App", //değişecek burası
    uri: "./todo2.jpeg",
    description:
      "Daha önce yapmış olduğu Todo uygulamasının bellekte oluşturulan kopya değerlerinin birden fazla sayfada ve component'te kullanılmasından dolayı kod karmaşıklığı artıyordu. Böylesi durumları daha rahat kontrol etmek için oluşturulan Redux kütüphanesini kullanarak verilerimi oluşturdum. Web üzerinden yaptığım isteklerin işlenmesi için createAsyncThunk fonksiyonlarını kullanarak önce veri tabanında daha sonrasında uygulama içinde değişimleri anlık olarak uyguladım.",
  },
  {
    title: "React Native Müzik Çalar Uygulaması",
    href: "https://github.com/mustafasnr/React-Native-Track-Player-App",
    uri: "./sound.jpeg",
    description:
      "React native'de cihazda bulunan ses dosyalarını oynatan bir müzik çalar uygulaması yaptım, ilk başta react-native-sound kütüphanesini kullandım, daha sonra geliştirmek istediğim bir uygulama için, ancak react-native-track-player kütüphanesinin bu uygulama için daha kullanışlı olması nedeniyle uygulamamda değişikliğe gittim.",
  },
  {
    title: "React Native ChatGPT Klonu",
    href: "https://github.com/mustafasnr/React-Native-ChatGPT-Clone-App",
    uri: "./gptclone.gif",
    description:
      "React Native'de ChatGPT mobil uygulamasının klonunu yaptım drawer menü tasarımını ve navigation parametreleriyle veri taşıma pratiği yaptım.",
  },
  {
    title: "React Native ile Derin Öğrenme Uygulaması ",
    href: "https://github.com/mustafasnr/React-Native-Deep-Learning-App",
    uri: "./deeplearning.gif",
    description:
      "Daha öncesinde uvicorn ve FastAPI ile geliştirmiş olduğum derin öğrenme API'sini mobil uygulamaya entegre etmek için geliştirdiğim bu uygulamada galeriden alınan görseli yerel sunucuya file objesi olarak yolluyorum, API'nin içinde kullanılan VGG16 modelinin ürettiği olasılıkları response ile json formatında geri döndürüyorum en son olarak alert ile ekranda gösteriyorum. Sunucuyu internete yükleyemediğim için yalnızca debug sürümünde sunucuya istek atabiliyorum.",
  },
  {
    title: "React Native ile SUBÜ Store Mobil Uygulaması ",
    href: "https://github.com/mustafasnr/React-Native-Deep-Learning-App",
    uri: "./store.jpeg",
    description:
      "Okulumun Kendi ürünlerini sattığı web sitesini kendi perspektifimden React Native ile oluşturdum. Ürün inceleme, ana sayfa, kategori seçimi, kargo takip ekranı ve sepet ekranlarından oluşan uygulamada sepet değişkenini yine kod karmaşıklığını ve hataları azaltmak için Redux ile oluşturdum.",
  },
];

export const mainText =
  "Merhaba, Ben Mustafa Söner, Sakarya Uygulamalı Bilimler Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim, 22 yaşındayım. Kendimi ve yaptıklarımı tanıttığım yer.";
