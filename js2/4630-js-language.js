
// 多语言
let navigatorLanguage = navigator.language.toLowerCase();
let beforeLanguage = 'en';
let storageName = '';
let langList = [
    { text: 'ENGLISH', name: 'en' },
    { text: '日本語', name: 'ja' },
    { text: 'Español', name: 'es' },
    { text: 'Português', name: 'pt' },
    { text: 'Deutsch', name: 'de' },
    { text: 'Français', name: 'fr' },
    { text: 'Indonesia', name: 'id' },
    { text: 'ไทย', name: 'th' }
];
function SetStorage(name, value) {
    localStorage.setItem(storageName + name, value)
}

function GetStorage(name) {
    return localStorage.getItem(storageName + name)
}

function DelStorage(name) {
    localStorage.removeItem(storageName + name);
}

let language = getUrlParameter('lang') || GetStorage('language') || window.navigator.language;

let languageObj = {


    en: {

        round2Date: '09.15~09.29',
        Subtitle: "Only for new players",
        // 新客户
        newCust: "I am a new user",
        // 老客户
        oldCust: "I am a returning user",
        // 镜都巡游
        jincru: "Mirroria Tour",
        // 参与主题挑战，成为最强执行者，赢取限定奖励
        title_new: "Join the Themed Challenge and Become the Strongest Executor to Win Limited Rewards!",
        // 巡游赛博城市，竞争镜都跑酷之王，赢取限定奖励
        jicrdetails: "Explore the Cyberpunk City and become a Mirroria Parkour Champion! Limited Rewards Await you!",
        // 能量晶尘（橙）
        encrdu: "Energy Crystal Dust (Orange)",
        // 最终兵器
        uw: "Ultimate Weapon",
        // 镜元
        mra: "Mira",
        // SSR源器·原能护盾
        SSR_en: "",
        // 时空晶碎
        scf: "",
        // 头像框·躯壳之外
        outbody: "",
        // 聊天气泡·TYPE-2
        chat_type2: "",
        // 称号·战斗天使
        tit_battle: "",
        // 童心稚趣
        Childlike: "",
        // 收集泡泡兑换外显和语音包
        Collect_bub: "",
        // 饰品·星星眼镜
        star: "",
        // Mia儿童节语音包
        mia: "",
        // 头像框·玩闹时光
        nautr: "",
        // 聊天气泡·漂浮乐园
        chat_float: "",
        // 回流专享·星途再启
        return_ex: "",
        // 10天以上未登录可触发回流
        day10: "",
        // 福利1-回流登录
        reward1: "",
        // 签到奖励，流失天数越多，可领取的登录奖励天数越多
        sign_reward: "",
        // （最低可得）
        miniget: "",
        // 福利2-回流任务
        reward2: "",
        // 完成每日回流任务，兑换奖励
        complete: "",
        // 福利3-回流特权
        reward3: "",
        // 与回流玩家组队可以额外获得回归点，鼓励帮助回流玩家
        Team_up: "",
        // 限定外显
        limit_ex: "",
        c0: '73',
        d1: 'x65',
        d2: 'x500',
        d3: 'x12',
        // title: 'Ver. 1.5 Artificial Island Special Event',
        description: 'Tower of Fantasy Global Launch Special Reward Event',
        go: 'GO',
        btn: 'Official Website',
        home: 'OFFICIAL WEBSITE',
        rewards: 'REWARDS OVERVIEW',
        c1: 'Up to',
        c2: 'Draws + ',
        c3: 'Weapon of Your Choice + ',
        c4: 'Relic + 15 ',
        c5: 'Limited Extrinsic Rewards',
        c6: '',
        vouchers: 'Vouchers',
        darkCrystals: 'Dark Crystal',
        ssr: 'SSR Weapon of your choice',
        attr4: 'SSR Relic',
        attr5: 'Limited Extrinsic Rewards',
        pre1: 'Register within 180 days after the launch,',
        pre2: 'then go to the in-game [Rewards] ― [Pre-registration Milestones] to claim',
        goldNucleus: 'Gold Nucleus',
        redNucleus: 'Red Nucleus',
        seabreeze: 'Gachapon Coin',
        award_name1: 'VOUCHERS',
        award_name2: 'RARE ITEMS',
        award_info1: 'Leader of Astra',
        award_info2: 'Aida TRAILBLAZER',
        award_info3: 'Avatar (Cute)',
        Avatar: "Avatar Frame: Champion Shopkeeper",
        Chat: "Chat Bubble: Champion Shopkeeper",
        title_s: "Title: Champion Shopkeeper",
        spe_vou: "Special Voucher",
        avafra: "Avatar Frame: Gaze Mirroria",
        chat_agin: "Chat Bubble: Set Off Again",
        tit_nav: "Title: Vera Navigator",
        ssr_re: "SSR Relic: Spacetime Rift ×1",
        ueq: "Ultimate Equipment",
        reach50: "Reach Lv. 50 or above to claim",
        part1_ft: "The final reward depends on the degree of participation in the event and varies between players",
        award_info4: 'Orion',
        award_info5: 'Star Sand ',
        events_rewards: 'REWARDS',
        events_e1_et: 'STARPATH NAVIGATION',
        events_e1_info_tit: '21 days after character creation',
        events_e1_info: 'Complete the Newcomer Mission to claim SSR of your choice and DrawX10',
        events_e1_info2: '',
        events_t1_exs: "LOGIN SUPPLIES",
        events_t2_exs: "AIDA CAFE",
        events_t3_exs: "VERA ORIENTEERING",
        first_shot: 'ROUND 1',
        second_shot: "ROUND 2",
        events_e1_bd3: 'Proof of Purchase',
        events_e2_et: 'SIDE BY SIDE',
        events_e2_info_tit: 'Permanent',
        events_e2_info: 'Register to claim 20 free draws and limited vehicle.',
        events_t2_info: "Make customers' favorite dishes and earn great rewards",
        events_t3_info: "Participate in a series of themed activities to accumulate progress across the service and redeem rewards",
        events_e2_bd2: 'Vehicle: 2613',
        events_e1_type1: 'Round 1',
        events_e1_type2: 'Round 2',
        events_e3_et: "PIONEER'S GIFT",
        events_e3_info_tit: '08.11~09.01',
        events_e3_info: 'Pre-Register and Receive Exclusive Bonus Rewards',
        events_e3_bd2: 'Nemesis Amplification Goggles',
        events_e4_et: 'EXECUTOR TRAINING',
        events_e4_info_tit: '08.23~08.30',
        events_e4_info: 'Defeat world bosses, get SSR Relics and red nucleus',
        events_e4_bd2: 'SSR Relic: Colossus Arm',
        events_e5_et: 'ROAD OF STRIFE',
        events_e5_info_tit: '09.01~09.15',
        events_e5_info: 'Join the themed events, obtain limited vehicles and red nucleus',
        events_e5_bd2: 'Vehicle: Mechbird',
        events_e6_et: 'LOGIN SUPPLIES ',
        events_e6_info_tit: 'Join the Daily Sign-in, get free vouchers',
        events_e6_info: '',
        events_e6_bd1: 'Red Nucleus',
        events_desc: 'How to obtain: After the event begins, go to the in-game [Rewards] page to view the rules and participate',
        userAgent: 'USER AGREEMENT',
        privacyPolicy: 'PRIVACY POLICY',
        cookiePolicy: 'COOKIE POLICY',
        contactUs: 'CONTACT US',
        await: 'Coming soon',
        t1: '08.10—08.30',
        t2: '08.10—08.16',
        t3: '8.11—8.30',
        t4: '8.11—8.17',
        t5: '8.11—8.17',
    },
    ja: {
        round2Date: '09.15~09.29',
        Subtitle: "新規ユーザーのみ受取可能",
        newCust: "新規探索者です",
        oldCust: "復帰探索者です",
        jincru: "ミラポリスツアー",
        title_new: "",
        jicrdetails: "サイバーパンク風の街「ミラポリス」を巡り、パルクール・キングを目指し、限定報酬を手に入れよう！",
        mra: "ミラン",
        SSR_en: "",
        scf: "",
        outbody: "",
        chat_type2: "",
        tit_battle: "",
        Childlike: "",
        Collect_bub: "",
        star: "",
        mia: "",
        nautr: "",
        chat_float: "",
        return_ex: "",
        day10: "",
        reward1: "",
        sign_reward: "",
        miniget: "",
        reward2: "",
        complete: "",
        reward3: "",
        Team_up: "",
        limit_ex: "",
        uw: "最終兵器",
        encrdu: "エナジー粒子(オレンジ)",
        c0: '73',
        d1: 'x65',
        d2: 'x500',
        d3: 'x12',
        title: 'Ver.1.5新マップ「人工島」スペシャル特典イベント',
        description: 'Tower of Fantasy （幻塔）グローバルリリース特典カーニバル',
        go: '今すぐチェック',
        btn: '今すぐチェック！',
        home: '公式サイトへ',
        rewards: '特典一覧',
        c1: '最高で',
        c2: '連ガチャ+選べる ',
        c3: '武器+',
        c4: 'アルケー+',
        c5: '限定外観',
        c6: '15種類を入手可能！',
        vouchers: 'ガチャ券',
        darkCrystals: '煙水晶',
        ssr: '選べるSSR武器',
        attr4: 'SSRアルケー',
        attr5: '限定外観アイテム',
        pre1: '受取方法：リリース180日以内',
        pre2: 'にゲームにログインすると、ゲーム内【特典】画面より受取可能。',
        goldNucleus: 'ゴールドコア',
        redNucleus: 'レッドコア',
        seabreeze: '海風ガチャコイン',
        award_name1: 'ガチャ',
        award_name2: 'レアアイテム',
        award_info1: 'アストラ島のリーダー',
        award_info2: 'アイダの探索者',
        award_info3: '専用アイコン',
        Avatar: "アイコンフレーム・ゴールド店長",
        Chat: "チャットの吹き出し・ゴールド店長",
        title_s: "称号・ゴールド店長",
        spe_vou: "スペシャルクーポン",
        avafra: "アイコンフレーム・ミラポリスの情景",
        chat_agin: "チャットの吹き出し・再出発",
        tit_nav: "称号・ヴェラのナビゲーター",
        ssr_re: "SSRアルケー・時空の裂け目×1",
        ueq: 'アルティメット装備',
        reach50: "Lv.50以上で受取可能",
        part1_ft: "最終的に獲得できる報酬の内容は、プレイヤーのイベント参加度によって異なります。",
        award_info4: 'オリオン座',
        award_info5: '星の砂',
        events_rewards: '報酬',
        events_e1_et: 'スターナビ',
        events_e1_info_tit: 'キャラクター作成から21日間',
        events_e1_info: '新人クエストをクリアすると、選べるSSRと10連ガチャをゲット',
        events_e1_info2: '選べるSSRと10連ガチャをゲット',
        events_t1_exs: "遂行補給",
        events_t2_exs: "アイダカフェ",
        events_t3_exs: "ヴェラのオリエンテーリング",
        events_t1_del: "",
        first_shot: '第一弾',
        second_shot: "第二弾",
        events_e1_bd3: '検索クーポン',
        events_e2_et: '心を一つに',
        events_e2_info_tit: '無期限',
        events_e2_info: 'キャラクター作成して20連ガチャと限定乗り物を貰おう！',
        events_t2_info: '訪問者の好みの料理を作って、豪華報酬を獲得しよう！',
        events_t3_info: 'テーマイベントに参加し、サーバーごとに貯蓄されるイベント進捗度によってもらえる豪華報酬を手に入れよう！',

        events_e2_bd2: '乗り物・2613',
        events_e1_type1: '第一弾',
        events_e1_type2: '第二弾',
        events_e3_et: "先駆者プレゼント",
        events_e3_info_tit: '08.11~09.01',
        events_e3_info: '登録して追加特典を受け取る',
        events_e3_bd2: 'ネメシスの増幅レンズ',
        events_e4_et: 'エクセキューターの試練',
        events_e4_info_tit: '08.23~08.30',
        events_e4_info: 'ワールドボスを倒してSSRアルケーとレッドコアを入手',
        events_e4_bd2: 'SSRアルケー・ジャイアントアーム',
        events_e5_et: '争いの道',
        events_e5_info_tit: '09.01~09.15',
        events_e5_info: 'テーマイベントに参加して限定乗り物とレッドコアを獲得',
        events_e5_bd2: '乗り物・メカバード',
        events_e6_et: '遂行補給',
        events_e6_info_tit: '毎日ログインしてガチャ券を無料でゲット',
        events_e6_info: '',
        events_desc: 'イベント開始後にゲーム内の 特典画面でルールを確認し、参加すると入手できます',
        userAgent: '利用規約',
        privacyPolicy: 'プライバシーポリシー',
        cookiePolicy: 'クッキー',
        contactUs: 'お問い合わせ',
        await: '未開放。どうぞお楽しみに',
        t1: '08.10—08.30',
        t2: '08.10—08.16',
        t3: '8.11—8.30',
        t4: '8.11—8.17',
        t5: '8.11—8.17',
    },
    es: {
        round2Date: '09.15~09.29',
        Subtitle: "Solo para usuarios nuevos",
        newCust: "Soy usuario nuevo",
        oldCust: "Soy usuario que regresa",
        title_new: "",
        jincru: "",
        jicrdetails: "",
        mra: "",
        SSR_en: "",
        scf: "",
        outbody: "",
        chat_type2: "",
        tit_battle: "",
        Childlike: "",
        Collect_bub: "",
        star: "",
        mia: "",
        nautr: "",
        chat_float: "",
        return_ex: "",
        day10: "",
        reward1: "",
        sign_reward: "",
        miniget: "",
        reward2: "",
        complete: "",
        reward3: "",
        Team_up: "",
        limit_ex: "",
        encrdu: "Cristapolvo energético (naranja)",
        uw: "",
        seabreeze: 'Moneda de Gachapon',
        c0: '73',
        d1: 'x65',
        d2: 'x500',
        d3: 'x12',
        title: 'Evento especial de Isla Artificial Ver. 1.5',
        description: 'Carnaval',
        go: 'Ir',
        btn: 'Ir',
        home: 'SITIO OFICIAL',
        rewards: 'RESUMEN DE RECOMPENSAS',
        c1: 'Hasta',
        c2: 'sorteos + Arma',
        c3: 'a Elección + Reliquia ',
        c4: 'SSR+ 15',
        c5: 'Recompensas Cosméticas Limitadas',
        c6: '',
        vouchers: 'Cupón',
        darkCrystals: 'Cristal oscuro',
        ssr: 'Armas SSR a elección',
        attr4: 'Reliquia SSR',
        attr5: 'Recompensas extrínsecas limitadas',
        pre1: 'Regístrate dentro de los 180 días posteriores al lanzamiento. ',
        pre2: 'Ve a la página de Recompensas - Hito de inscripción para obtenerlas.',
        goldNucleus: 'Núcleo dorado',
        redNucleus: 'Núcleo rojo',
        award_name1: 'CUPÓN DE MONEDAS',
        award_name2: 'OBJETOS RAROS',
        award_info1: 'Líder de Astra',
        award_info2: 'Pionero de Aida',
        award_info3: 'Avatar (Adorable)',
        Avatar: "Marco de avatar: Campeón Comerciante",
        Chat: "Burbuja de chat: Comerciante campeón",
        title_s: "Título: Campeón Comerciante",
        spe_vou: "Cupón Especial",
        avafra: "Marco de avatar: Observar Espejia",
        chat_agin: "Burbuja de chat: En Marcha de Nuevo",
        tit_nav: "Título: Navegante de Vera",
        ssr_re: "Reliquia SSR: Grieta Espaciotemporal ×1",
        ueq: "Equipo perfeccionado",
        reach50: "Alcanza el Nv. 50 o superior para obtener",
        part1_ft: "La recompensa final depende del grado de participación en el evento y varía entre jugadores",
        award_info4: 'Orión',
        award_info5: 'Arena de Estrellas',

        events_rewards: 'RECOMPENSAS',
        events_e1_et: 'NAVEGACIÓN DE SENDA ESTELAR',
        events_e1_info_tit: '21 días después de la creación del personaje',
        events_e1_info: 'Completa la misión de principiante para reclamar un SSR a elección y Sorteo x10.',
        events_e1_info2: 'un SSR a elección y Sorteo x10.',
        events_t1_exs: "SUMINISTROS DE INICIO DE SESIÓN",
        events_t2_exs: "CAFÉ DE AIDA",
        events_t3_exs: "ORIENTACIÓN DE VERA",
        first_shot: 'Ronda 1',
        second_shot: "Ronda 2",
        events_e1_bd3: 'Prueba de compra',
        events_e2_et: 'LADO A LADO',
        events_e2_info_tit: 'Permanente',
        events_e2_info: 'Regístrate para obtener 20 sorteos gratis y vehículos limitados.',
        events_t2_info: 'Prepara los platillos favoritos de los clientes y obtén grandes recompensas',
        events_t3_info: 'Participa en una serie de eventos temáticos para acumular progreso en el servidor y canjear recompensas',
        events_e2_bd2: 'Vehículo: 2613',
        events_e1_type1: 'Ronda 1',
        events_e1_type2: 'Ronda 2',
        events_e3_et: "REGALO DEL PIONERO",
        events_e3_info_tit: '08.11~09.01',
        events_e3_info: 'Inscríbete para obtener recompensas exclusivas',
        events_e3_bd2: 'Gafas de amplificación de Némesis',
        events_e4_et: 'ENTRENAMIENTO DE EJECUTOR',
        events_e4_info_tit: '08.23~08.30',

        events_e4_info: 'Derrota jefes de mundo, obtén reliquias SSR y núcleo rojo',
        events_e4_bd2: 'Reliquia SSR: Brazo de Coloso',
        events_e5_et: 'SENDA DE CONFLICTO',
        events_e5_info_tit: '09.01~09.15',
        events_e5_info: 'Únete a los eventos temáticos, intercambia por vehículos limitados y núcleo rojo',
        events_e5_bd2: 'Vehículo: Ave robot',
        events_e6_et: 'SUMINISTROS DE INICIO DE SESIÓN',
        events_e6_info_tit: 'Únete al Registro diario, obtén cupones gratis',
        events_e6_info: '',
        events_desc: 'Formas de obtener: Ve a la pàgina de Recompensas del Evento para ver las reglas y participa una vez que comience el evento.',

        userAgent: 'ACUERDO DE USUARIO',
        privacyPolicy: 'POLÍTICA DE PRIVACIDAD',
        cookiePolicy: 'POLÍTICA DE COOKIES',
        contactUs: 'CONTÁCTANOS',
        await: 'No disponible. Próximamente.',
        t1: '08.10—08.30',
        t2: '08.10—08.16',
        t3: '8.11—8.30',
        t4: '8.11—8.17',
        t5: '8.11—8.17',
    },
    pt: {
        round2Date: '09.15~09.29',
        Subtitle: "Apenas para novos jogadores",
        newCust: "Sou novo usuário",
        oldCust: "Sou usuário que está voltando",
        jincru: "Tour de Reflexia",
        title_new: "",
        jicrdetails: "Explore a cidade cyberpunk e vença a competição de parkour de Reflexia! Recompensas limitadas estão à sua espera!",
        mra: "Reflexa",
        SSR_en: "",
        scf: "",
        outbody: "",
        chat_type2: "",
        tit_battle: "",
        Childlike: "",
        Collect_bub: "",
        star: "",
        mia: "",
        nautr: "",
        chat_float: "",
        return_ex: "",
        day10: "",
        reward1: "",
        sign_reward: "",
        miniget: "",
        reward2: "",
        complete: "",
        reward3: "",
        Team_up: "",
        limit_ex: "",
        encrdu: "Pó de cristal energético (laranja)",
        uw: "Arma Definitiva",
        seabreeze: 'Moeda de gachapon',
        c0: '73',
        d1: 'x65',
        d2: 'x500',
        d3: 'x12',
        title: 'Evento especial da versão 1.5: Ilha Artificial',
        description: 'Carnaval',
        go: 'Ir',
        btn: 'Ir',
        home: 'SITE OFICIAL',
        rewards: 'RESUMEN DE RECOMPENSAS',
        c1: 'Até',
        c2: 'sorteios + armas',
        c3: 'à sua escolha + Relíquia',
        c4: '+ 15',
        c5: 'Recompensas Extrínsecas Limitadas',
        c6: '',
        vouchers: 'Núcleo',
        darkCrystals: 'Cristal negro',
        ssr: 'Armas SSR da sua escolha',
        attr4: 'Relíquia SSR',
        attr5: 'Recompensa Extrínseca Limitada',
        pre1: 'Crie uma conta em até 180 dias a contar do lançamento. ',
        pre2: 'Acesse a página Recompensas - Marco de pré-registro para obter.',
        goldNucleus: 'Núcleo dorado',
        award_name1: 'MOEDA DE Núcleo',
        award_name2: 'ITENS RAROS',
        award_info1: 'Líder de Astra',
        award_info2: 'Pioneiro de Aida',
        award_info3: 'Avatar (Fofo)',
        Avatar: "Moldura de avatar: Balconista Campeão",
        Chat: "Caixa de bate-papo: Balconista Campeão",
        title_s: "Título: Balconista Campeão",
        avafra: "Moldura de avatar: Fantasias de Reflexia",
        chat_agin: "Caixa de bate-papo: Parta novamente",
        tit_nav: "Título: Pilotando em Vera",
        ssr_re: "Relíquia SSR: Fenda Espaço-Temporal ×1",
        ueq: "Equipamento supremo",
        reach50: "Atinja pelo menos o Nv. 50 para poder resgatar",
        part1_ft: "A recompensa final varia de acordo com a participação no evento, então pode variar entre os jogadores.",
        spe_vou: "Núcleo especial",
        award_info4: 'Orion',
        award_info5: 'Areia Estelar',
        events_rewards: 'RECOMPENSAS',
        events_e1_et: 'NAVEGAÇÃO DO ASTRAJETO',
        events_e1_info_tit: '21 dias após a criação de personagem',
        events_e1_info: 'Conclua missões de iniciante para resgatar SSR da sua esco-lha e Sor-teio ×10.',
        events_e1_info2: 'sua escolha e Sorteio ×10.',
        events_t1_exs: "Suprimentos de acesso",
        events_t2_exs: "CAFETERIA DE AIDA",
        events_t3_exs: "ORIENTAÇÃO DE VERA",
        first_shot: 'Rodada 1',
        second_shot: "Rodada 2",
        events_e1_bd3: 'Comprovante de compra',
        events_e2_et: 'Lado a Lado',
        events_e2_info_tit: 'Permanente',
        events_e2_info: 'Registre-se para ganhar 20 sorteios e veículos limitados.',
        events_t2_info: 'Faça os pratos favoritos dos clientes e ganhe grandes recompensas.',
        events_t3_info: 'Participe da série de eventos e obtenha progresso do servidor para resgatar recompensas.',
        events_e2_bd2: 'Veículo: 2613',
        events_e1_type1: 'RODADA 1',
        events_e1_type2: 'RODADA 2',
        events_e3_et: "BRINDE DE PIONEIRISMO",
        events_e3_info_tit: '08.11~09.01',
        events_e3_info: 'Pré-registre-se e receba recompensas bônus exclusivas',
        events_e3_bd2: 'Óculos Amplificadores da Nêmesis',
        events_e4_et: 'TREINO DE EXECUTOR',
        events_e4_info_tit: '08.23~08.30',
        events_e4_info: 'Derrote chefes globais e obtenha Relíquias SSR e núcleos vermelhos',
        events_e4_bd2: 'Relíquia SSR: Braço Colossal',
        events_e5_et: 'ESTRADA DA CONTENDA',
        events_e5_info_tit: '09.01~09.15',
        events_e5_info: 'Participe de eventos temáticos e troque por veículos limitados e núcleos vermelhos',
        events_e5_bd2: 'Veículo: Passarobô',
        events_e6_et: `Suprimentos de acesso`,
        events_e6_info_tit: 'Participe do Acesso Diário e ganhe Núcleos grátis',
        events_e6_info: '',
        redNucleus: 'Núcleo vermelho',
        events_desc: 'Como obter: Acesse a página de recompensas do evento depois que ele começar para ver as regras e participar.',

        userAgent: 'CONTRATO DE USUÁRIO',
        privacyPolicy: 'POLÍTICA DE PRIVACIDADE',
        cookiePolicy: 'POLÍTICA DE COOKIES',
        contactUs: 'CONTATE-NOS',
        await: 'Indisponível. Em breve.',
        t1: '08.10—08.30',
        t2: '08.10—08.16',
        t3: '8.11—8.30',
        t4: '8.11—8.17',
        t5: '8.11—8.17',
    },
    de: {
        datetime1: '15.9-29.9',
        datetime2: "27.9-12.10",
        dt1: "(15.9-26.9)",
        dt2: "(27.9-7.10)",
        round2Date: '15.09~29.09',
        Subtitle: "Nur für neue Spieler",
        newCust: "Ich bin ein neuer Benutzer.",
        oldCust: "Ich bin ein zurückkehrender Benutzer.",
        jincru: "Mirroria-Tour",
        title_new: "",
        jicrdetails: "Erkunde die Stadt im Cyberpunk-Stil und werde zum Parkour-Meister in Mirroria! Limitierte Belohnungen erwarten dich!",
        mra: "Mira",
        SSR_en: "",
        scf: "",
        outbody: "",
        chat_type2: "",
        tit_battle: "",
        Childlike: "",
        Collect_bub: "",
        star: "",
        mia: "",
        nautr: "",
        chat_float: "",
        return_ex: "",
        day10: "",
        reward1: "",
        sign_reward: "",
        miniget: "",
        reward2: "",
        complete: "",
        reward3: "",
        Team_up: "",
        limit_ex: "",
        uw: "Ultimative Waffe",
        encrdu: "Energiekristallstaub (orange)",
        seabreeze: 'Gashapon-Münze',
        c0: '73',
        d1: 'x65',
        d2: 'x500',
        d3: 'x12',
        title: 'Ver. 1.5 Künstliche Insel - Spezialevent',
        description: 'Karneval',
        go: 'Weiter',
        btn: 'Offizielle Website',
        home: 'OFFIZIELLE WEBSITE',
        rewards: 'BELOHNUNGSÜBERSICHT',
        c1: 'Maximal',
        c2: 'Ziehungen +',
        c3: '-Waffen deiner Wahl +',
        c4: '-Relikt + 15',
        c5: 'limitierte kosmetische Belohnungen',
        c6: '',
        vouchers: 'Gutscheine',
        darkCrystals: 'Dunkle Kristalle',
        ssr: 'SSR-Waffe deiner Wahl',
        attr4: 'SSR-Relikt',
        attr5: 'limitierte kosmetische Belohnungen',
        pre1: 'Registriere dich innerhalb von 180 Tagen nach dem Start und begib dich im Spiel zu',
        pre2: '[Belohnungen] > [Vorregistrierungsmeilensteine], um sie zu erhalten',
        goldNucleus: 'Goldkern',
        award_name1: 'GUTSCHEINE',
        award_name2: 'SELTENE GEGENSTÄNDE',
        award_info1: 'Anführer von Astra',
        award_info2: 'Aida-Vorreiter',
        award_info3: 'Avatar (niedlich)',
        Avatar: "Avatarrahmen: Ladenbesitzer-Champion",
        Chat: "Chat-Blase: Ladenbesitzer-Champion",
        title_s: "Titel: Ladenbesitzer-Champion",
        spe_vou: "Sondergutschein",
        avafra: "Avatarrahmen: Blick auf Mirroria",
        chat_agin: "Chat-Blase: Erneuter Aufbruch",
        tit_nav: "Titel: Vera-Navigator",
        ssr_re: "SSR-Relikt: Raumzeitriss x1",
        ueq: "Ultimative Ausrüstung",
        reach50: "Erreiche St. 50 oder höher, um das abzuholen",
        part1_ft: "Die endgültige Belohnung hängt vom Beteiligungsgrad im Event ab und variiert zwischen Spielern.",
        award_info4: 'Orion',
        award_info5: 'Sternensand',
        events_rewards: 'BELOHNUNGEN',
        events_e1_et: 'STERNENPFAD-NAVIGATION',
        events_e1_info_tit: '21 Tage nach der Charaktererstellung',
        events_e1_info: 'Schließe die Neulingsmission ab, um einen SSR-Gegenstand deiner Wahl und 10 Ziehungen zu erhalten',
        events_e1_info2: 'stand deiner Wahl und 10 Ziehungen zu erhalten',
        events_t1_exs: "ANMELDEVORRÄTE",
        events_t2_exs: "AIDA-CAFÉ",
        events_t3_exs: "VERA-ORIENTIERUNGSLAUF",
        first_shot: 'RUNDE 1',
        second_shot: "RUNDE 2",
        events_e1_bd3: 'Kaufnachweis',
        events_e2_et: 'Seite an Seite',
        events_e2_info_tit: 'Permanent',
        events_e2_info: 'Registrieren und 20 kostenlose Ziehungen und ein limitiertes Fahrzeug.',
        events_t2_info: 'Bereite die Lieblingsgerichte der Gäste zu und hole dir massive Belohnungen.',
        events_t3_info: "Nimm an einer Reihe thematischer Aktivitäten teil, um auf dem Server Fortschritte zu erzielen, und löse Belohnungen ein.",
        events_e2_bd2: 'Fahrzeug: 2613',
        events_e1_type1: 'RUNDE 1',
        events_e1_type2: 'RUNDE 2',
        events_e3_et: "GESCHENK DES PIONIERS",
        events_e3_info_tit: '11.08~01.09',
        events_e3_info: 'Vorregistrieren und exklusive Belohnungen erhalten',
        events_e3_bd2: 'Nemesis-Vergrößerungsbrille',
        events_e4_et: 'VOLLSTRECKER-TRAINING',
        events_e4_info_tit: '23.08~30.08',
        events_e4_info: 'Besiege Weltbosse, erhalte SSR-Relikte und einen Rotkern',
        events_e4_bd2: 'SSR-Relikt: Arm des Kolosses',
        events_e5_et: 'WEG DES KONFLIKTS',
        events_e5_info_tit: '01.09~15.09',
        events_e5_info: 'Nimm an Events teil und erhalte so ein limitiertes Fahrzeug und einen Rotkern',
        events_e5_bd2: 'Fahrzeug: Mechvogel',
        events_e6_et: 'ANMELDEVORRÄTE',
        events_e6_info_tit: 'Melde dich täglich an und erhalte kostenlose Gutscheine',
        events_e6_info: '',
        redNucleus: 'Rotkern',
        events_desc: 'So erhältst du sie: Begib dich nach Beginn des Events im Spiel auf die [Belohnungen]-Seite, um die Regeln einzusehen und teilzunehmen.',

        userAgent: 'NUTZUNGSBEDINGUNGEN',
        privacyPolicy: 'DATENSCHUTZERKLÄRUNG',
        cookiePolicy: 'COOKIE-RICHTLINIE',
        contactUs: 'KONTAKT',
        await: 'Demnächst erhältlich',
        t1: '10.08—30.08',
        t2: '10.08—16.08',
        t3: '11.08—30.08',
        t4: '11.08—17.08',
        t5: '11.08—17.08',
    },
    fr: {
        datetime1: '15/9->29/9',
        datetime2: "27/9->12/10",
        dt1: "(15/9->29/9)",
        dt2: "(27/9->12/10)",
        round2Date: '09.15~09.29',
        Subtitle: "Uniquement pour les nouveaux joueurs",
        newCust: "Je découvre le jeu",
        oldCust: "Je reprends le jeu",
        jincru: "Visite de Mirroria",
        title_new: "",
        jicrdetails: "Explorer la ville cyberpunk et devenez un champion du parcours à Mirroria ! Des récompenses en édition limitée vous attendent !",
        mra: "Mira",
        SSR_en: "",
        scf: "",
        outbody: "",
        chat_type2: "",
        tit_battle: "",
        Childlike: "",
        Collect_bub: "",
        star: "",
        mia: "",
        nautr: "",
        chat_float: "",
        return_ex: "",
        day10: "",
        reward1: "",
        sign_reward: "",
        miniget: "",
        reward2: "",
        complete: "",
        reward3: "",
        Team_up: "",
        limit_ex: "",
        uw: "Arme ultime",
        encrdu: "Cristalithe d'énergie (orange)",
        seabreeze: 'Pièce gachapon',
        c0: '73',
        d1: 'x65',
        d2: 'x500',
        d3: 'x12',
        title: "Événement spécial de l'île artificielle V. 1.5",
        description: 'Carnaval',
        go: 'Aller',
        btn: 'Site officiel',
        home: 'SITE WEB OFFFICIEL',
        rewards: 'APERÇU DES RÉCOMPENSES',
        c1: 'Jusqu’à',
        c2: 'tirages + l’arme',
        c3: 'de votre choix + une relique ',
        c4: '+ 15 ',
        c5: 'récompenses cosmétiques en édition limitée',
        c6: '',
        vouchers: 'Tirages',
        darkCrystals: 'Cristaux obscurs',
        ssr: 'Arme SSR au choix',
        attr4: 'Relique SSR',
        attr5: 'Récompenses cosmétiques en édition limitée',
        pre1: 'Inscrivez-vous dans les 180 jours après le lancement, puis rendez-vous dans le jeu sur la page',
        pre2: '[Récompenses] > [Étapes de pré-inscription] pour réclamer les récompenses',
        goldNucleus: 'Nucléus or',
        award_name1: 'Tirages',
        award_name2: 'OBJETS RARES',
        award_info1: "Chef d'Astra",
        award_info2: "Pionnier d'Aida",
        award_info3: 'Avatar (mignon)',
        Avatar: "Cadre d'avatar : Champion des commerçants",
        Chat: "Bulle de discussion : Champion des commerçants",
        title_s: "Titre : Champion des commerçants",
        spe_vou: "coupon spécial",
        avafra: "Cadre d'avatar : Regard sur Mirroria",
        chat_agin: "Bulle de discussion : Le voyage continue",
        tit_nav: "Titre : Navigateur de Vera",
        ssr_re: "Relique SSR : Faille temporelle ×1",
        ueq: 'Équipement ultime',
        reach50: "Atteindre le Niv. 50 ou plus pour récupérer",
        part1_ft: "La récompense finale dépend du degré d'implication dans l'événement et varie d'un joueur à l'autre.",
        award_info4: 'Orion',
        award_info5: 'Sable étoilé',
        events_rewards: 'RÉCOMPENSES',
        events_e1_et: 'NAVIGATION SUR LE SENTIER ÉTOILÉ',
        events_e1_info_tit: '21 jours après la création de ton personnage',
        events_e1_info: 'Terminez la mission de débutant pour récupérer le SSR de votre choix et 10 tirages',
        events_e1_info2: 'SSR de ton choix et un tirage x10.',
        events_t1_exs: "FOURNITURES DE CONNEXION",
        events_t2_exs: "CAFÉ D'AIDA",
        events_t3_exs: "COURSE D'ORIENTATION DE VERA",
        first_shot: '1E MANCHE',
        second_shot: "2E MANCHE",
        events_e1_bd3: "Preuve d'achat",
        events_e2_et: 'Côte à côte',
        events_e2_info_tit: 'Permanent',
        events_e2_info: 'Registrieren und 20 kostenlose Ziehungen und ein limitiertes Fahrzeug.',
        events_t2_info: 'Personnalise les plats préférés de tes clients et obtiens de grosses récompenses',
        events_t3_info: "Participe à une série d'activités à thème pour progresser dans le service et obtenir des récompenses",
        events_e2_bd2: 'Véhicule : 2613',
        events_e1_type1: '1E MANCHE',
        events_e1_type2: '2E MANCHE',
        events_e3_et: "CADEAU DU PIONNIER",
        events_e3_info_tit: '08.11~09.01',
        events_e3_info: 'Préinscris-toi pour recevoir des récompenses bonus exclusives',
        events_e3_bd2: "Lunettes d'amplification de Nemesis",
        events_e4_et: "ENTRAÎNEMENT D'EXÉCUTANT",
        events_e4_info_tit: '08.23~08.30',
        events_e4_info: 'Battez des boss du monde, obtenez des reliques SSR et des nucléus rouges.',
        events_e4_bd2: 'Relique SSR : bras de colosse',
        events_e5_et: 'VOIE DU CONFLIT',
        events_e5_info_tit: '09.01~09.15',
        events_e5_info: 'Rejoignez des événements à thème, obtenez des véhicules en édition limitée et des nucléus rouges.',
        events_e5_bd2: 'Véhicule : avimécano',
        events_e6_et: 'FOURNITURES DE CONNEXION',
        events_e6_info_tit: 'Particippe à la connexion quotidienne et gagne des coupons gratuits.',
        events_e6_info: '',
        redNucleus: 'Nucléus rouge',
        events_desc: "Marche à suivre : une fois l'événement commencé, rendez-vous sur la page [Récompenses] pour consulter les règles de participation",

        userAgent: 'ACCORD UTILISATEUR',
        privacyPolicy: 'POLITIQUE DE CONFIDENTIALITÉ',
        cookiePolicy: 'POLITIQUE EN MATIÈRE DE COOKIES',
        contactUs: 'CONTACTEZ-NOUS',
        await: 'Prochainement',
        t1: '08.10—08.30',
        t2: '08.10—08.16',
        t3: '8.11—8.30',
        t4: '8.11—8.17',
        t5: '8.11—8.17',
    },
    id: {
        round2Date: '09.15~09.29',
        Subtitle: "Bonus Pemula",
        newCust: "Saya pengguna baru",
        oldCust: "Saya pengguna lama",
        jincru: "Mirroria Tour",
        title_new: "",
        jicrdetails: "Jelajahi Cyberpunk City dan jadilah Mirroria Parkour Champion! Hadiah Eksklusif Menunggumu!",
        mra: "Mira",
        SSR_en: "",
        scf: "",
        outbody: "",
        chat_type2: "",
        tit_battle: "",
        Childlike: "",
        Collect_bub: "",
        star: "",
        mia: "",
        nautr: "",
        chat_float: "",
        return_ex: "",
        day10: "",
        reward1: "",
        sign_reward: "",
        miniget: "",
        reward2: "",
        complete: "",
        reward3: "",
        Team_up: "",
        limit_ex: "",
        encrdu: "Energy Crystal Dust (oranye)",
        uw: "Ultimate Weapon",
        seabreeze: 'Gachapon Coin',
        c0: '73',
        d1: 'x65',
        d2: 'x500',
        d3: 'x12',
        title: 'Event Spesial Artificial Island Ver. 1.5',
        description: 'Karnaval',
        go: 'BUKA',
        btn: 'BUKA',
        home: 'SITUS WEB RESMI',
        rewards: 'RINGKASAN HADIAH',
        c1: 'Hingga ',
        c2: 'x Draw + ',
        c3: 'Weapon Pilihanmu +',
        c4: 'Relic + 15',
        c5: 'Cosmetic Eksklusif ',
        c6: '',
        vouchers: 'Voucher',
        darkCrystals: 'Dark Crystal',
        ssr: 'SSR Weapon pilihanmu',
        attr4: 'SSR Relic',
        attr5: 'Hadiah Eksklusif Terbatas',
        pre1: 'Lakukan registrasi selama 180 hari setelah peluncuran.',
        pre2: 'Buka halaman Hadiah > Milestone Registrasi Awal untuk mengklaim hadiah.',
        goldNucleus: 'Gold Nucleus',
        award_name1: 'VOUCHER',
        award_name2: 'ITEM RARE',
        award_info1: "Leader of Astra",
        award_info2: "Aida Trailblazer",
        award_info3: 'Avatar (Cute)',
        Avatar: "Buat hidangan kesukaan pengunjung dan dapatkan hadiah",
        Chat: "Avatar Frame: Champion Shopkeeper",
        title_s: "Chat Bubble: Champion Shopkeeper",
        spe_vou: "Title: Champion Shopkeeper",
        avafra: "Avatar Frame: Gaze Mirroria",
        chat_agin: "Chat Bubble: Set Off Again",
        tit_nav: "Title: Vera Navigator",
        ssr_re: "SSR Relic: Spacetime Rift ×1",
        ueq: "Ultimate Equipment",
        reach50: "Capai Lv. 50 atau yang lebih tinggi untuk mengklaim",
        part1_ft: "Hadiah yang didapat tergantung dari keaktifan partisipasi dalam event dan bervariasi antar pemain",
        award_info4: 'Orion',
        award_info5: 'Star Sand',
        events_rewards: 'HADIAH',
        events_e1_et: 'STARPATH NAVIGATION',
        events_e1_info_tit: '21 hari setelah pembuatan karakter',
        events_e1_info: 'Terminez la mission de débutant pour récupérer le SSR de votre choix et 10 tirages',
        events_e1_info2: 'pilihanmu dan 10x Draw',
        events_t1_exs: "LOG IN SUPPLIES",
        events_t2_exs: "AIDA CAFE",
        events_t3_exs: "VERA ORIENTEERING",
        first_shot: 'Putaran 1',
        second_shot: "Putaran 2",
        events_e1_bd3: "Bukti Pembelian",
        events_e2_et: 'Berdampingan',
        events_e2_info_tit: 'Permanen',
        events_e2_info: 'Registrieren und 20 kostenlose Ziehungen und ein limitiertes Fahrzeug',
        events_t2_info: 'Buat hidangan kesukaan pengunjung dan dapatkan hadiah',
        events_t3_info: 'Ikut dalam event eksklusif untuk mengakumulasi progres dan tukar dengan hadiah',
        events_e2_bd2: 'Vehicle: 2613',
        events_e1_type1: 'PUTARAN 1',
        events_e1_type2: 'PUTARAN 2',
        events_e3_et: "PIONEER'S GIFT",
        events_e3_info_tit: '08.11~09.01',
        events_e3_info: 'Lakukan Praregistrasi dan Terima Hadiah Bonus Eksklusif',
        events_e3_bd2: "Nemesis Amplification Goggles",
        events_e4_et: "LATIHAN EXECUTOR",
        events_e4_info_tit: '08.23~08.30',
        events_e4_info: 'Kalahkan World Boss, dapatkan SSR Relic dan Red Nucleus',
        events_e4_bd2: 'SSR Relic: Colossus Arm',
        events_e5_et: 'ROAD OF STRIFE',
        events_e5_info_tit: '09.01~09.15',

        events_e5_info: 'Gabung ke event bertema, dapatkan kendaraan terbatas dan Red Nucleus',
        events_e5_bd2: 'Vehicle: Mechbird',
        events_e6_et: 'LOG IN SUPPLIES',
        events_e6_info_tit: 'Gabung Sign-in Harian, dapatkan voucher gratis',
        events_e6_info: '',
        redNucleus: 'Red Nucleus',
        events_desc: "Cara Mendapatkan: Buka halaman Hadiah Event untuk melihat aturan dan berpartisipasi setelah event dimulai.",

        userAgent: 'PERJANJIAN PENGGUNA',
        privacyPolicy: 'KEBIJAKAN PRIVASI',
        cookiePolicy: 'COOKIE POLICY',
        contactUs: 'HUBUNGI KAMI',
        await: 'Tidak Tersedia. Segera Hadir.',
        t1: '08.10—08.30',
        t2: '08.10—08.16',
        t3: '8.11—8.30',
        t4: '8.11—8.17',
        t5: '8.11—8.17',
    },
    th: {
        Subtitle: "สำหรับผู้เล่นใหม่เท่านั้น",
        newCust: "ฉันเป็นผู้เล่นหน้าใหม่",
        oldCust: "ฉันเป็นผู้เล่นที่กลับมาเยือน",
        jincru: "ทัวร์มิเรอเรีย",
        title_new: "",
        jicrdetails: "ออกสำรวจเมืองสไตล์ไซเบอร์พังก์เพื่อเป็นสุดยอดนักปาร์กัวร์แห่งมิเรอเรีย! รางวัลแบบลิมิเต็ดกำลังรอคุณอยู่!",
        mra: "มิร่า",
        SSR_en: "",
        scf: "",
        outbody: "",
        chat_type2: "",
        tit_battle: "",
        Childlike: "",
        Collect_bub: "",
        star: "",
        mia: "",
        nautr: "",
        chat_float: "",
        return_ex: "",
        day10: "",
        reward1: "",
        sign_reward: "",
        miniget: "",
        reward2: "",
        complete: "",
        reward3: "",
        Team_up: "",
        limit_ex: "",
        encrdu: "ธุลีคริสตัลพลังงาน (ส้ม)",
        uw: "อาวุธอัลติเมท",
        round2Date: '09.15~09.29',
        seabreeze: 'เหรียญกาชาปอน',
        c0: '73',
        d1: 'x65',
        d2: 'x500',
        d3: 'x12',
        title: 'อีเวนต์พิเศษเกาะประดิษฐ์ Ver.1.5',
        description: 'งานฉลอง',
        go: 'ไป',
        btn: 'เว็บไซต์หลัก',
        home: 'เว็บไซต์อย่างเป็นทางการ',
        rewards: 'เว็บไซต์อย่างเป็นทางการ',
        c1: 'รับสิทธิ์สุ่มสูงสุด',
        c2: 'ครั้ง + อาวุธ',
        c3: 'ตามใจเลือก + รีลิค ',
        c4: '+ ',
        c5: 'ของตกแต่งรุ่นลิมิเต็ด 15 อย่าง',
        c6: '',
        vouchers: 'บัตรกำนัล',
        darkCrystals: 'คริสตัลดำ',
        ssr: 'อาวุธ SSR แบบเลือกได้',
        attr4: 'รีลิค SSR',
        attr5: 'รางวัลของตกแต่งรุ่นลิมิเต็ด',
        pre1: 'ลงทะเบียนภายใน 180 วันหลังจากเปิดตัวเกม',
        pre2: 'ไปที่หน้า รางวัล - ยอดลงทะเบียนล่วงหน้าทะลุเป้าหมาย เพื่อรับรางวัล',
        goldNucleus: 'นิวเคลียสทอง',
        award_name1: 'สกุลเงินบัตรกำนัล',
        award_name2: 'ไอเทมระดับแรร์',
        award_info1: "ผู้นำแห่งแอสตรา",
        award_info2: "ผู้เบิกเส้นทางไอดา",
        award_info3: 'อวาตาร์ (น่ารัก)',
        Avatar: "กรอบอวาตาร์: พนักงานร้านยอดแชมเปี้ยน",
        Chat: "กล่องแชท: พนักงานร้านยอดแชมเปี้ยน",
        title_s: "ฉายา: พนักงานร้านยอดแชมเปี้ยน",
        spe_vou: "บัตรกำนัลพิเศษ",
        avafra: "กรอบอวาตาร์: จ้องมองมิเรอเรีย",
        chat_agin: "กล่องแชท: ออกเดินทางอีกครั้ง",
        tit_nav: "ฉายา: ผู้นำทางในวีร่า",
        ssr_re: "รีลิค SSR : รอยแยกกาลอวกาศ ×1",
        ueq: "อุปกรณ์ระดับอัลติเมท",
        reach50: "ไปให้ถึง Lv. 50 หรือสูงกว่าเพื่อรับของ",
        part1_ft: "รางวัลขั้นสุดท้ายจะแตกต่างกันไป ตามระดับการมีส่วนร่วมและความแตกต่างระหว่างเหล่านักพเนจรทั้งหลาย",
        award_info4: 'โอไรออน',
        award_info5: 'สตาร์แซนด์',
        events_rewards: 'รางวัล',
        events_e1_et: 'การนำทางสู่สตาร์พาธ',
        events_e1_info_tit: '21 วันหลังจากสร้างตัวละคร',
        events_e1_info: 'ทำภารกิจมือใหม่ให้สำเร็จเพื่อรับ SSR แบบเลือกได้และสิทธิ์สุ่ม 10 ครั้ง',
        events_e1_info2: '',
        events_t1_exs: "เสบียงล็อกอิน",
        events_t2_exs: "คาเฟ่ไอดา",
        events_t3_exs: "ลุยแผนที่แข่งความเร็วที่วีร่า",
        first_shot: 'รอบที่ 1',
        second_shot: "รอบที่ 2",
        events_e1_bd3: "หลักฐานการชำระเงิน",
        events_e2_et: 'เคียงข้าง',
        events_e2_info_tit: 'ถาวร',
        events_e2_info: 'ลงทะเบียนเพื่อรับสิทธิ์สุ่มฟรี 20 ครั้ง พร้อมยานพาหนะรุ่นลิมิเต็ด',
        events_t2_info: 'ปรุงอาหารจานโปรดของลูกค้า แล้วรับรางวัลมากมาย',
        events_t3_info: 'เข้าร่วมอีเวนต์ในซีรี่ส์ต่างๆ และบรรลุเป้าหมายความคืบหน้าประจำเซิร์ฟเวอร์เพื่อแลกของรางวัล ',
        events_e2_bd2: 'พาหนะ: 2613',
        events_e1_type1: 'รอบที่ 1',
        events_e1_type2: 'รอบที่ 2',
        events_e3_et: "ของขวัญผู้บุกเบิก",
        events_e3_info_tit: '08.11~09.01',
        events_e3_info: 'ลงทะเบียนล่วงหน้าและรับรางวัลโบนัสสุดพิเศษ',
        events_e3_bd2: "แว่นตากันลมขยายกำลังของเนเมซิส",
        events_e4_et: "การฝึกฝนมือพิฆาต",
        events_e4_info_tit: '08.23~08.30',
        events_e4_info: 'พิชิตบอสโลก แล้วรับรีลิค SSR และนิวเคลียสแดง',
        events_e4_bd2: 'รีลิค SSR: แขนคอลอสซัส',
        events_e5_et: 'ถนนแห่งการต่อสู้',
        events_e5_info_tit: '09.01~09.15',
        events_e5_info: 'เข้าร่วมกิจกรรมในธีมต่างๆ เพื่อแลกรับพาหนะรุ่นลิมิเต็ด และนิวเคลียสแดง',
        events_e5_bd2: 'พาหนะ: เมคเบิร์ด',
        events_e6_et: 'เสบียงล็อกอิน',
        events_e6_info_tit: 'เข้าร่วมกิจกรรมล็อกอินรายวัน และรับบัตรกำนัลฟรี',
        events_e6_info: '',
        redNucleus: 'นิวเคลียสแดง',
        events_desc: "เงื่อนไขรับรางวัล: ไปที่หน้ากิจกรรม รางวัล เพื่อดูกติกาและเข้าร่วมหลังจากที่กิจกรรมเริ่มต้นขึ้น",

        userAgent: 'ข้อตกลงการใช้งาน',
        privacyPolicy: 'นโยบายคุ้มครองสิทธิส่วนบุคคล',
        cookiePolicy: 'นโยบายเกี่ยวกับคุกกี้',
        contactUs: 'ติดต่อเรา',
        await: 'เร็วๆ นี้',
        t1: '08.10—08.30',
        t2: '08.10—08.16',
        t3: '8.11—8.30',
        t4: '8.11—8.17',
        t5: '8.11—8.17',
    },
    Init: function () {
        this.Change();
    },
    langHtml: function () {
        let langHtml = '';
        langList.forEach(item => {
            if (item.name != language) {
                langHtml += '<span data-lang="' + item.name + '">' + item.text + '</span>'
            }
        });
        $('.home_link').attr('href', 'https://toweroffantasy-global.com/index.html?lang=' + language);
        $('.new_detail').attr('href', 'https://www.toweroffantasy-global.com/news-detail.html?content_id=4ac5355ba4d5ba4d5da9044a179ed899dfd1&lang=' + language);
        // $('#userAgent').attr('href','https://toweroffantasy-global.com/UserAgreement.html?lang='+language);
        // $('#privacyPolicy').attr('href','https://toweroffantasy-global.com/PrivacyPolicy.html?lang='+language);
        // $('#cookiePolicy').attr('href','https://toweroffantasy-global.com/CookiePolicy.html?lang='+language);
        $("meta[name='description']").attr('content', languageObj[language].description);
        $("meta[name='keywords']").attr('content', languageObj[language].title);
        $('#langList').empty().append(langHtml);
    },
    Change: function () {
        $('#langName').text(language);
        $('body').removeClass('lang_' + beforeLanguage).addClass('lang_' + language);
        SetStorage('language', language);
        console.log(beforeLanguage, language);
        this.langHtml();
        $('[lang]').each(function () {
            if ($(this)[0].tagName === 'HTML') {
                return
            }
            switch ($(this).attr('lang')) {
                case 'src':
                    $(this).attr('data-src', $(this).attr('data-src').replace(`/${beforeLanguage}/`, `/${language}/`));
                    break
                case 'hide':
                    if ($(this).attr('language') === language) {
                        $(this).show()
                    } else {
                        $(this).hide()
                    }
                    break
                default:
                    if ($(this)[0].tagName === 'INPUT') {
                        $(this).attr('placeholder', languageObj[language][$(this).attr('lang')]);
                    } else if ($(this)[0].tagName === 'META') {
                        $(this).attr('content', languageObj[language][$(this).attr('lang')]);
                        console.log($(this)[0].outerHTML);
                    } else {
                        $(this).html(languageObj[language][$(this).attr('lang')]);
                    }
                    break
            }
        })
        this.ImageLoad()
    },
    ImageLoad: function () {
        $('img').each(function () {
            $(this).attr('src', $(this).attr('data-src'));
        })
    }
}
let that = languageObj
// 多语言start
// 标题
that.en.title = 'Fallens PracticePVP - Reborn'
that.ja.title = 'Fallens PracticePVP - Reborn'
that.es.title = 'Fallens PracticePVP - Reborn'
that.pt.title = 'Fallens PracticePVP - Reborn'
that.de.title = 'Fallens PracticePVP - Reborn'
that.fr.title = 'Fallens PracticePVP - Reborn'
that.id.title = 'Fallens PracticePVP - Reborn'
that.th.title = 'Fallens PracticePVP - Reborn'

// 福利总览
that.en.Rewards_Overview = 'Rewards Overview'
that.ja.Rewards_Overview = '特典一覧'
that.es.Rewards_Overview = 'Resumen de recompensas'
that.pt.Rewards_Overview = 'Resumo das recompensas'
that.de.Rewards_Overview = 'Belohnungsübersicht'
that.fr.Rewards_Overview = 'Aperçu des récompenses'
that.id.Rewards_Overview = 'Ringkasan Hadiah'
that.th.Rewards_Overview = 'ภาพรวมของรางวัล'

// 限定外显
that.en.Limited = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Limited = 'Ver. 1.5 Artificial Island Special Event'
that.es.Limited = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Limited = 'Ver. 1.5 Artificial Island Special Event'
that.de.Limited = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Limited = 'Ver. 1.5 Artificial Island Special Event'
that.id.Limited = 'Ver. 1.5 Artificial Island Special Event'
that.th.Limited = 'Ver. 1.5 Artificial Island Special Event'

// 抽卡券
that.en.Vouchers = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Vouchers = 'Ver. 1.5 Artificial Island Special Event'
that.es.Vouchers = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Vouchers = 'Ver. 1.5 Artificial Island Special Event'
that.de.Vouchers = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Vouchers = 'Ver. 1.5 Artificial Island Special Event'
that.id.Vouchers = 'Ver. 1.5 Artificial Island Special Event'
that.th.Vouchers = 'Ver. 1.5 Artificial Island Special Event'

// 墨晶
that.en.Dark = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Dark = 'Ver. 1.5 Artificial Island Special Event'
that.es.Dark = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Dark = 'Ver. 1.5 Artificial Island Special Event'
that.de.Dark = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Dark = 'Ver. 1.5 Artificial Island Special Event'
that.id.Dark = 'Ver. 1.5 Artificial Island Special Event'
that.th.Dark = 'Ver. 1.5 Artificial Island Special Event'


// 最终奖励获得视玩家差异、活动参与程度而定
that.en.The_final_reward = 'Ver. 1.5 Artificial Island Special Event'
that.ja.The_final_reward = 'Ver. 1.5 Artificial Island Special Event'
that.es.The_final_reward = 'Ver. 1.5 Artificial Island Special Event'
that.pt.The_final_reward = 'Ver. 1.5 Artificial Island Special Event'
that.de.The_final_reward = 'Ver. 1.5 Artificial Island Special Event'
that.fr.The_final_reward = 'Ver. 1.5 Artificial Island Special Event'
that.id.The_final_reward = 'Ver. 1.5 Artificial Island Special Event'
that.th.The_final_reward = 'Ver. 1.5 Artificial Island Special Event'

// 我是新用户
that.en.new_user = 'I AM A NEW USER'
that.ja.new_user = '新規探索者です'
that.es.new_user = 'SOY USUARIO NUEVO'
that.pt.new_user = 'SOU NOVO USUÁRIO'
that.de.new_user = 'ICH BIN EIN NEUER BENUTZER.'
that.fr.new_user = 'JE DÉCOUVRE LE JEU'
that.id.new_user = 'SAYA PENGGUNA BARU'
that.th.new_user = 'ฉันเป็นผู้เล่นหน้าใหม่'

// 我是回流用户
that.en.returning_user = 'I AM A RETURNING USER'
that.ja.returning_user = '復帰探索者です'
that.es.returning_user = 'SOY USUARIO QUE REGRESA'
that.pt.returning_user = 'SOU USUÁRIO QUE ESTÁ VOLTANDO'
that.de.returning_user = 'ICH BIN EIN ZURÜCKKEHRENDER BENUTZER.'
that.fr.returning_user = 'JE REPRENDS LE JEU'
that.id.returning_user = 'SAYA PENGGUNA LAMA'
that.th.returning_user = 'ฉันเป็นผู้เล่นที่กลับมาเยือน'

// 预注册奖励发放
that.en.Pre_registration = `&ensp;Pre-registration Rewards`
that.ja.Pre_registration = `事前登録報酬を配布`
that.es.Pre_registration = `Distribución de recompensas de inscripción`
that.pt.Pre_registration = `Distribuição das recompensas de pré-registro`
that.de.Pre_registration = `Vorregistrierungsbelohnungen`
that.fr.Pre_registration = `Récompenses de pré-inscription`
that.id.Pre_registration = `Hadiah Pra Registrasi`
that.th.Pre_registration = `การแจกของรางวัลลงทะเบียนล่วงหน้า`

// 珍稀道具
that.en.Rare_Items = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Rare_Items = 'Ver. 1.5 Artificial Island Special Event'
that.es.Rare_Items = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Rare_Items = 'Ver. 1.5 Artificial Island Special Event'
that.de.Rare_Items = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Rare_Items = 'Ver. 1.5 Artificial Island Special Event'
that.id.Rare_Items = 'Ver. 1.5 Artificial Island Special Event'
that.th.Rare_Items = 'Ver. 1.5 Artificial Island Special Event'

// 金核
that.en.Gold = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Gold = 'Ver. 1.5 Artificial Island Special Event'
that.es.Gold = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Gold = 'Ver. 1.5 Artificial Island Special Event'
that.de.Gold = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Gold = 'Ver. 1.5 Artificial Island Special Event'
that.id.Gold = 'Ver. 1.5 Artificial Island Special Event'
that.th.Gold = 'Ver. 1.5 Artificial Island Special Event'

// 星岛领袖
that.en.Leader = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Leader = 'Ver. 1.5 Artificial Island Special Event'
that.es.Leader = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Leader = 'Ver. 1.5 Artificial Island Special Event'
that.de.Leader = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Leader = 'Ver. 1.5 Artificial Island Special Event'
that.id.Leader = 'Ver. 1.5 Artificial Island Special Event'
that.th.Leader = 'Ver. 1.5 Artificial Island Special Event'

// 艾达开拓者
that.en.Aida = `Aida Trailblazer`
that.ja.Aida = `アイダの探索者`
that.es.Aida = `Pionero de Aida`
that.pt.Aida = `Pioneiro de Aida`
that.de.Aida = `Aida-Vorreiter`
that.fr.Aida = `Pionnier d'Aida`
that.id.Aida = `Aida Trailblazer`
that.th.Aida = `ผู้เบิกเส้นทางไอดา`

// Q版头像
that.en.Avatar = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Avatar = 'Ver. 1.5 Artificial Island Special Event'
that.es.Avatar = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Avatar = 'Ver. 1.5 Artificial Island Special Event'
that.de.Avatar = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Avatar = 'Ver. 1.5 Artificial Island Special Event'
that.id.Avatar = 'Ver. 1.5 Artificial Island Special Event'
that.th.Avatar = 'Ver. 1.5 Artificial Island Special Event'

// 猎户座
that.en.Orion = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Orion = 'Ver. 1.5 Artificial Island Special Event'
that.es.Orion = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Orion = 'Ver. 1.5 Artificial Island Special Event'
that.de.Orion = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Orion = 'Ver. 1.5 Artificial Island Special Event'
that.id.Orion = 'Ver. 1.5 Artificial Island Special Event'
that.th.Orion = 'Ver. 1.5 Artificial Island Special Event'

// 星砂
that.en.Star_Sand = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Star_Sand = 'Ver. 1.5 Artificial Island Special Event'
that.es.Star_Sand = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Star_Sand = 'Ver. 1.5 Artificial Island Special Event'
that.de.Star_Sand = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Star_Sand = 'Ver. 1.5 Artificial Island Special Event'
that.id.Star_Sand = 'Ver. 1.5 Artificial Island Special Event'
that.th.Star_Sand = 'Ver. 1.5 Artificial Island Special Event'

// 立即前往
that.en.Official = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Official = 'Ver. 1.5 Artificial Island Special Event'
that.es.Official = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Official = 'Ver. 1.5 Artificial Island Special Event'
that.de.Official = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Official = 'Ver. 1.5 Artificial Island Special Event'
that.id.Official = 'Ver. 1.5 Artificial Island Special Event'
that.th.Official = 'Ver. 1.5 Artificial Island Special Event'

// 新手专享及游戏内福利
that.en.Rookie = `Rookie Bonuses`
that.ja.Rookie = `新人ギフト`
that.es.Rookie = `Bonificaciones de aprendiz`
that.pt.Rookie = `Bônus de iniciante`
that.de.Rookie = `Neulings-Boni`
that.fr.Rookie = `Bonus de novice`
that.id.Rookie = `Rookie Bonus`
that.th.Rookie = `โบนัสมือใหม่`


// 领取途径
that.en.How = 'Register within 180 days after the launch,</br>then go to the in-game [Rewards] > [Pre-registration Milestones] to claim'
that.ja.How = '受取方法：リリース180日以内にゲームにログインすると、ゲーム内【特典】</br>画面より受取可能。'
that.es.How = 'Regístrate dentro de los 180 días posteriores al lanzamiento. Ve a la página de</br> Recompensas - Hito de inscripción para obtenerlas.'
that.pt.How = 'Crie uma conta em até 180 dias a contar do lançamento. Acesse a página</br> Recompensas - Marco de pré-registro para obter.'
that.de.How = 'Registriere dich innerhalb von 180 Tagen nach dem Start und begib dich im </br> Spiel zu [Belohnungen] > [Vorregistrierungsmeilensteine], um sie zu erhalten'
that.fr.How = 'Inscrivez-vous dans les 180 jours après le lancement, puis rendez-vous dans le</br> jeu sur la page [Récompenses] > [Étapes de pré-inscription]pour réclamer les</br> récompenses'
that.id.How = 'Lakukan registrasi selama 180 hari setelah peluncuran. Buka halaman </br>Hadiah > Milestone Registrasi Awal untuk mengklaim hadiah.'
that.th.How = 'ลงทะเบียนภายใน 180 วันหลังจากเปิดตัวเกม ไปที่หน้า รางวัล - ยอดลงทะเบียนล่วงหน้าทะลุเป้าหมาย เพื่อรับรางวัล'

// 仅限新用户领取
that.en.only = 'Ver. 1.5 Artificial Island Special Event'
that.ja.only = 'Ver. 1.5 Artificial Island Special Event'
that.es.only = 'Ver. 1.5 Artificial Island Special Event'
that.pt.only = 'Ver. 1.5 Artificial Island Special Event'
that.de.only = 'Ver. 1.5 Artificial Island Special Event'
that.fr.only = 'Ver. 1.5 Artificial Island Special Event'
that.id.only = 'Ver. 1.5 Artificial Island Special Event'
that.th.only = 'Ver. 1.5 Artificial Island Special Event'

// 星路领航
that.en.Starpath = 'Starpath Navigation'
that.ja.Starpath = 'スターナビ'
that.es.Starpath = 'Navegación de Senda Estelar'
that.pt.Starpath = 'NAVEGAÇÃO DO ASTRAJETO'
that.de.Starpath = 'Sternenpfad-Navigation'
that.fr.Starpath = 'Navigation sur le Sentier étoilé'
that.id.Starpath = 'Starpath Navigation'
that.th.Starpath = 'การนำทางสู่สตาร์พาธ'

// 创角后21天
that.en.days21 = '21 days after character creation'
that.ja.days21 = 'キャラクター作成から21日以内'
that.es.days21 = '21 días después de la creación del personaje'
that.pt.days21 = '21 dias após a criação de personagem'
that.de.days21 = '21 Tage nach der Charaktererstellung'
that.fr.days21 = '21 jours après la création de votre personnage'
that.id.days21 = '21 hari setelah pembuatan karakter'
that.th.days21 = '21 วันหลังจากสร้างตัวละคร'

// 完成新手任务，领取自选SSR和十连抽
that.en.Complete = `Complete the Newcomer Mission to claim SSR of your choice and Draw-10`
that.ja.Complete = `新人イベントをクリアして、選べるSSRとガチャ10回をゲット！`
that.es.Complete = `Completa la misión de principiante para reclamar un SSR a elección y Sorteo x10.`
that.pt.Complete = `Conclua missões de iniciante para resgatar SSR da sua escolha e Sorteio ×10.`
that.de.Complete = `Schließe die Neulingsmission ab, um einen SSR-Gegenstand deiner Wahl und 10 Ziehungen zu erhalten.`
that.fr.Complete = `Terminez la mission de débutant pour récupérer le SSR de votre choix et 10 tirages.`
that.id.Complete = `Selesaikan Newcomer Mission untuk mendapatkan SSR pilihanmu dan 10x Draw`
that.th.Complete = `ทำภารกิจมือใหม่ให้สำเร็จเพื่อรับ SSR แบบเลือกได้และสิทธิ์สุ่ม 10 ครั้ง`

// 福利
that.en.Rewards = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Rewards = 'Ver. 1.5 Artificial Island Special Event'
that.es.Rewards = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Rewards = 'Ver. 1.5 Artificial Island Special Event'
that.de.Rewards = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Rewards = 'Ver. 1.5 Artificial Island Special Event'
that.id.Rewards = 'Ver. 1.5 Artificial Island Special Event'
that.th.Rewards = 'Ver. 1.5 Artificial Island Special Event'

// 检索凭证
that.en.Proof = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Proof = 'Ver. 1.5 Artificial Island Special Event'
that.es.Proof = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Proof = 'Ver. 1.5 Artificial Island Special Event'
that.de.Proof = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Proof = 'Ver. 1.5 Artificial Island Special Event'
that.id.Proof = 'Ver. 1.5 Artificial Island Special Event'
that.th.Proof = 'Ver. 1.5 Artificial Island Special Event'



// 同心同行
that.en.side = 'Side by Side'
that.ja.side = '心を一つに'
that.es.side = 'Lado a Lado'
that.pt.side = 'LADO A LADO'
that.de.side = 'Seite an Seite'
that.fr.side = 'Côte à côte'
that.id.side = 'Berdampingan'
that.th.side = 'เคียงข้าง'

// 永久
that.en.Permanent = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Permanent = 'Ver. 1.5 Artificial Island Special Event'
that.es.Permanent = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Permanent = 'Ver. 1.5 Artificial Island Special Event'
that.de.Permanent = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Permanent = 'Ver. 1.5 Artificial Island Special Event'
that.id.Permanent = 'Ver. 1.5 Artificial Island Special Event'
that.th.Permanent = 'Ver. 1.5 Artificial Island Special Event'

// 注册即领20连抽和限定载具
that.en.Register20 = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Register20 = 'Ver. 1.5 Artificial Island Special Event'
that.es.Register20 = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Register20 = 'Ver. 1.5 Artificial Island Special Event'
that.de.Register20 = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Register20 = 'Ver. 1.5 Artificial Island Special Event'
that.id.Register20 = 'Ver. 1.5 Artificial Island Special Event'
that.th.Register20 = 'Ver. 1.5 Artificial Island Special Event'

// 载具·2613
that.en.Vehicle = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Vehicle = 'Ver. 1.5 Artificial Island Special Event'
that.es.Vehicle = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Vehicle = 'Ver. 1.5 Artificial Island Special Event'
that.de.Vehicle = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Vehicle = 'Ver. 1.5 Artificial Island Special Event'
that.id.Vehicle = 'Ver. 1.5 Artificial Island Special Event'
that.th.Vehicle = 'Ver. 1.5 Artificial Island Special Event'

// 赤核
that.en.Red = 'Ver. 1.5 Artificial Island Special Event'
that.ja.Red = 'Ver. 1.5 Artificial Island Special Event'
that.es.Red = 'Ver. 1.5 Artificial Island Special Event'
that.pt.Red = 'Ver. 1.5 Artificial Island Special Event'
that.de.Red = 'Ver. 1.5 Artificial Island Special Event'
that.fr.Red = 'Ver. 1.5 Artificial Island Special Event'
that.id.Red = 'Ver. 1.5 Artificial Island Special Event'
that.th.Red = 'Ver. 1.5 Artificial Island Special Event'

// 游戏内活动
that.en.IN_GAME = `IN-GAME REWARDS`
that.ja.IN_GAME = `ゲーム内イベント`
that.es.IN_GAME = `Eventos dentro del juego`
that.pt.IN_GAME = `Eventos no jogo`
that.de.IN_GAME = `Events im Spiel`
that.fr.IN_GAME = `Événements en jeu`
that.id.IN_GAME = `Event In-game`
that.th.IN_GAME = `กิจกรรมภายในเกม`

// 镜都巡游
that.en.Mirroria = 'MIRRORIA TOUR'
that.ja.Mirroria = 'ミラポリスツアー'
that.es.Mirroria = 'TOUR DE ESPEJIA'
that.pt.Mirroria = 'TOUR DE REFLEXIA'
that.de.Mirroria = 'MIRRORIA-TOUR'
that.fr.Mirroria = 'VISITE DE MIRRORIA'
that.id.Mirroria = 'MIRRORIA TOUR'
that.th.Mirroria = 'ทัวร์มิเรอเรีย'

// 巡游赛博城市，竞争镜都跑酷之王，赢取限定奖励
that.en.win = `Explore the Cyberpunk City and become a Mirroria Parkour Champion! Limited Rewards Await you!`
that.ja.win = `サイバーパンク風の街「ミラポリス」を巡り、パルクール・キングを目指し、限定報酬を手に入れよう！`
that.es.win = `¡Explora la ciudad ciberpunk y gana el Campeonato de Parkour de Espejia! ¡Te esperan recompensas limitadas!`
that.pt.win = `Explore a cidade cyberpunk e vença a competição de parkour de Reflexia! Recompensas limitadas estão à sua espera!`
that.de.win = `Erkunde die Cyberpunk-Stadt und werde zum Parkour-Meister in Mirroria! Limitierte Belohnungen erwarten dich!`
that.fr.win = `Explorer la ville cyberpunk et devenez un champion du parcours à Mirroria ! Des récompenses en édition limitée vous attendent !`
that.id.win = `Jelajahi Cyberpunk City dan jadilah Mirroria Parkour Champion! Hadiah Eksklusif Menunggumu!`
that.th.win = `ออกสำรวจเมืองสไตล์ไซเบอร์พังก์เพื่อเป็นสุดยอดนักปาร์กัวร์แห่งมิเรอเรีย! รางวัลแบบลิมิเต็ดกำลังรอคุณอยู่!`

// 能量晶尘（橙）
that.en.orange = `Energy Crystal Dust (Orange)`
that.ja.orange = `エナジー粒子(オレンジ)`
that.es.orange = `Cristapolvo energético (naranja)`
that.pt.orange = `Pó de cristal energético (laranja)`
that.de.orange = `Energiekristallstaub (orange)`
that.fr.orange = `Cristalithe d'énergie (orange)`
that.id.orange = `Energy Crystal Dust (oranye)`
that.th.orange = `ธุลีคริสตัลพลังงาน (ส้ม)`

// 镜元
that.en.Mira = 'Mira'
that.ja.Mira = 'ミラン'
that.es.Mira = 'Mira'
that.pt.Mira = 'Reflexa'
that.de.Mira = 'Mira'
that.fr.Mira = 'Mira'
that.id.Mira = 'Mira'
that.th.Mira = 'มิร่า'

// 最终兵器
that.en.Ultimate = 'ULTIMATE WEAPON'
that.ja.Ultimate = '最終兵器'
that.es.Ultimate = 'ARMA PERFECCIONADA'
that.pt.Ultimate = 'ARMA DEFINITIVA'
that.de.Ultimate = 'ULTIMATIVE WAFFE'
that.fr.Ultimate = 'ARME ULTIME'
that.id.Ultimate = 'ULTIMATE WEAPON'
that.th.Ultimate = 'อาวุธอัลติเมท'

// 参与主题挑战，成为最强执行者，赢取限定奖励
that.en.Challenge = `Join the Themed Challenge and Become the Strongest Executor to Win Limited Rewards!`
that.ja.Challenge = `イベントに参加して、最強のエクセキューターになれ！様々な限定報酬を入手可能！`
that.es.Challenge = `¡Participa en el desafío temático y conviértete en el Ejecutor más fuerte para ganar recompensas limitadas!`
that.pt.Challenge = `Participe do desafio temático e torne-se o Executor mais forte para ganhar recompensas limitadas!`
that.de.Challenge = `Nimm an der Themenherausforderung teil, werde zum stärksten Vollstrecker und gewinne limitierte Belohnungen!`
that.fr.Challenge = `Participez au défi et devenez le meilleur Exécutant pour gagner des récompenses en édition limitée !`
that.id.Challenge = `Gabung dengan Tantangan Bertema dan Jadilah Executor Terkuat untuk Memenangkan Hadiah Eksklusif!`
that.th.Challenge = `แกร่งที่สุด แล้วคว้าของรางวัลแบบลิมิเต็ดมาครอง!`

// SSR源器·原能护盾
that.en.Omnium = `SSR Relic: Omnium Shield`
that.ja.Omnium = `SSRアルケー・オムニアムの盾`
that.es.Omnium = `Reliquia SSR: Escudo de Omnio`
that.pt.Omnium = `Relíquia SSR: Escudo de Omnium`
that.de.Omnium = `SSR-Relikt: Omnium-Schild`
that.fr.Omnium = `Relique SSR : Bouclier à omnium`
that.id.Omnium = `SSR Relic: Omnium Shield`
that.th.Omnium = `รีลิค SSR: โล่ออมเนียม`

// 时空晶碎
that.en.Spacetime = `Spacetime Crystal Fragments`
that.ja.Spacetime = `時空晶片`
that.es.Spacetime = `Fragmentos de Cristal Espaciotemporal`
that.pt.Spacetime = `Estilhaços de cristal do espaço-tempo`
that.de.Spacetime = `Raumzeit-Kristallfragmente`
that.fr.Spacetime = `Fragments de cristal spatio-temporels`
that.id.Spacetime = `Spacetime Crystal Fragment`
that.th.Spacetime = `ชิ้นส่วนคริสตัลกาลอวกาศ`

// 头像框·躯壳之外
that.en.Outside = `Avatar Frame: Outside Body`
that.ja.Outside = `アイコンフレーム・躯体の外`
that.es.Outside = `Marco de avatar: Exocuerpo`
that.pt.Outside = `Moldura de avatar: Corpo externo`
that.de.Outside = `Avatarrahmen: Außenkörper`
that.fr.Outside = `Cadre d'avatar : Corps extérieur`
that.id.Outside = `Avatar Frame: Tubuh Luar`
that.th.Outside = `กรอบอวาตาร์: นอกร่าง`

// 聊天气泡·TYPE-2
that.en.Bubble2 = 'Chat Bubble: TYPE-2'
that.ja.Bubble2 = 'チャットの吹き出し·TYPE-2'
that.es.Bubble2 = 'Burbuja de chat: TIPO-2'
that.pt.Bubble2 = 'Caixa de bate-papo: TIPO-2'
that.de.Bubble2 = 'Chat-Blase: TYP 2'
that.fr.Bubble2 = 'Bulle de discussion : TYPE 2'
that.id.Bubble2 = 'Chat Bubble: TYPE-2'
that.th.Bubble2 = 'กล่องแชท: ไทป์-2'

// 称号·战斗天使
that.en.Angel = `Title: Battle Angel`
that.ja.Angel = `称号・バトルエンジェル`
that.es.Angel = `Título: Ángel de Batalla`
that.pt.Angel = `Título: Anjo de Batalha`
that.de.Angel = `Titel: Kampfengel`
that.fr.Angel = `Titre : Ange de combat`
that.id.Angel = `Title: Battle Angel`
that.th.Angel = `ฉายา: เทวทูตสงคราม`

// 称号·战斗天使
that.en.Angelx = `Battle Angel`
that.ja.Angelx = `バトルエンジェル`
that.es.Angelx = `Ángel de Batalla`
that.pt.Angelx = `Anjo de Batalha`
that.de.Angelx = `Kampfengel`
that.fr.Angelx = `Ange de combat`
that.id.Angelx = `Battle Angel`
that.th.Angelx = `เทวทูตสงคราม`

// 童心稚趣
that.en.Childlike = 'CHILDLIKE INNOCENCE'
that.ja.Childlike = '童心の遊び'
that.es.Childlike = 'INOCENCIA INFANTIL'
that.pt.Childlike = 'INOCÊNCIA PUERIL'
that.de.Childlike = 'KINDLICHE UNSCHULD'
that.fr.Childlike = 'INNOCENCE ENFANTINE'
that.id.Childlike = 'CHILDLIKE INNOCENCE'
that.th.Childlike = 'วัยเด็กไร้เดียงสา'

// 收集泡泡兑换外显和语音包
that.en.Collect = 'Collect bubbles to exchange for cosmetics and voice packs.'
that.ja.Collect = 'シャボン玉を収集して外観やボイスパックと交換しよう '
that.es.Collect = 'Recolecta botellas de burbujas y cámbialas por elementos cosméticos y paquetes de voz. '
that.pt.Collect = 'Colete garrafas de bolhas para trocar por itens cosméticos e pacotes de voz.'
that.de.Collect = 'Sammle Blasenflaschen und tausche sie gegen Kosmetika und Sprachpakete ein.'
that.fr.Collect = 'Récupérez des bouteilles à bulles à échanger contre des éléments cosmétiques et des packs vocaux.'
that.id.Collect = 'Kumpulkan botol gelembung untuk ditukarkan dengan Cosmetic dan Paket Suara.'
that.th.Collect = 'เก็บรวบรวมขวดฟองสบู่เพื่อนำไปแลกเป็นเครื่องสำอางและแพ็กเสียงพากย์ '

// 饰品·星星眼镜
that.en.starA = `Accessory: Starry Glasses`
that.ja.starA = `アクセサリー：キラキラメガネ`
that.es.starA = `Accesorio: Gafas de Estrellas`
that.pt.starA = `Acessório: Óculos Estrelado`
that.de.starA = `Zubehör: Sternenbrille`
that.fr.starA = `Accessoire : Lunettes étoilées`
that.id.starA = `Aksesori: Starry Glasses`
that.th.starA = `แว่นแห่งดวงดารา`

// Mia儿童节语音包
that.en.Miapack = `Mi-a's International Children's Day Voice Pack`
that.ja.Miapack = `ボイスパック：Miaの「子どもの日」`
that.es.Miapack = `Paquete de voz: Día Internacional de la Niñez de Mi-a`
that.pt.Miapack = `Pacote de voz de Mi-a de Dia Mundial da Criança`
that.de.Miapack = `Mi-as Sprachpaket zum internationalen Kindertag`
that.fr.Miapack = `Pack vocal de Mi-a : Journée de l'enfance`
that.id.Miapack = `Paket Suara Mi-a's International Children's Day`
that.th.Miapack = `แพ็กเสียงพากย์ฉลองวันเด็กสากลของมีอา`


// goldNucleus
that.en.redNucleus = `Red Nucleus`
that.ja.redNucleus = `レッドコア`
that.es.redNucleus = `Núcleo rojo`
that.pt.redNucleus = `Núcleo vermelho`
that.de.redNucleus = `Rotkern`
that.fr.redNucleus = `Nucléus rouge`
that.id.redNucleus = `Red Nucleus`
that.th.redNucleus = `นิวเคลียสแดง`



// redNucleus
that.en.goldNucleus = `Gold Nucleus`
that.ja.goldNucleus = `ゴールドコア`
that.es.goldNucleus = `Núcleo dorado`
that.pt.goldNucleus = `Núcleo dourado`
that.de.goldNucleus = `Goldkern`
that.fr.goldNucleus = `Nucléus or`
that.id.goldNucleus = `Gold Nucleus`
that.th.goldNucleus = `นิวเคลียสทอง`

// 头像框·玩闹时光
that.en.Naughty = `Avatar Frame: Naughty Trails`
that.ja.Naughty = `アイコンフレーム：エンジョイタイム`
that.es.Naughty = `Marco de avatar: Senderos traviesos`
that.pt.Naughty = `Moldura de avatar: Rastros traquinas`
that.de.Naughty = `Avatarrahmen: Ungezogene Pfade`
that.fr.Naughty = `Cadre d'avatar : Pistes coquines`
that.id.Naughty = `Avatar Frame: Naughty Trails`
that.th.Naughty = `กรอบอวาตาร์: เส้นทางสายสนุก`

// 聊天气泡·漂浮乐园
that.en.Floating = `Chat Bubble: Floating Paradise`
that.ja.Floating = `チャットの吹き出し：ウキウキテーマパーク`
that.es.Floating = `Burbuja de chat: Paraíso flotante`
that.pt.Floating = `Caixa de bate-papo: Paraíso levitante`
that.de.Floating = `Chat-Blase: Schwebendes Paradies`
that.fr.Floating = `Bulle de discussion : Paradis flottant`
that.id.Floating = `Chat Bubble: Floating Paradise`
that.th.Floating = `กล่องแชท: สวรรค์ล่องลอย`

// 回流专享·星途再启
that.en.Stellarway = 'Returner-Exclusive:</br> Stellarway Restart'
that.ja.Stellarway = `復帰探索者限定！</br>スターロード・リスタート`
that.es.Stellarway = 'Exclusivo de retorno:</br> Reinicio de Vía Estelar'
that.pt.Stellarway = 'Exclusivo de retorno:</br> Recomeço Viastral'
that.de.Stellarway = 'Exklusiv für Rückkehrer:</br> Sternenweg-Neustart'
that.fr.Stellarway = 'Exclusivité retour :</br> Redémarrage de la Chaussée stellaire'
that.id.Stellarway = 'Eksklusif untuk Returner:</br> Stellarway Restart'
that.th.Stellarway = 'พิเศษเฉพาะผู้กลับมาเยือน:</br> รีสตาร์ตสเตลลาร์เวย์'

// 10天以上未登录可触发回流
that.en.days10 = `Trigger the returner status if not logged in over 10 days`
that.ja.days10 = `10日以上ログインしてない探索者が対象`
that.es.days10 = `Activa el estado de retorno si no inicias sesión en más de 10 días`
that.pt.days10 = `O estado de retorno é acionado se você passar mais de 10 dias sem acessar o jogo`
that.de.days10 = `Der Rückkehrer-Status wird ausgelöst, wenn du dich für mehr als 10 Tage nicht angemeldet hast.`
that.fr.days10 = `Activez le statut "de retour" quand vous ne vous êtes pas connecté pendant plus de 10 jours`
that.id.days10 = `Mengaktifkan status Returner jika tidak login selama lebih dari 10 hari`
that.th.days10 = `ผู้เล่นที่ไม่ล็อกอินเป็นเวลาเกินกว่า 10 วัน จะได้รับสถานะผู้กลับมาเยือน`


// 参与每日签到，领取抽卡券
that.en.events_e6_info_tit = `Join the Daily Sign-in, get free vouchers`
that.ja.events_e6_info_tit = `毎日ログインしてガチャ券を無料でゲット`
that.es.events_e6_info_tit = `Únete al Registro diario, obtén cupones gratis`
that.pt.events_e6_info_tit = `Participe do Acesso Diário e ganhe Núcleos grátis`
that.de.events_e6_info_tit = `Melde dich täglich an und erhalte kostenlose Gutscheine`
that.fr.events_e6_info_tit = `Particippe à la connexion quotidienne et gagne des coupons gratuits.`
that.id.events_e6_info_tit = `Gabung Sign-in Harian, dapatkan voucher gratis`
that.th.events_e6_info_tit = `เข้าร่วมกิจกรรมล็อกอินรายวันและรับบัตรกำนัลฟรี`


// 福利1-回流登录
that.en.Reward1 = 'Reward 1:'
that.ja.Reward1 = '特典①'
that.es.Reward1 = 'Recompensa 1:'
that.pt.Reward1 = '1.ª recompensa:'
that.de.Reward1 = 'Belohnung 1:'
that.fr.Reward1 = 'Récompense 1 :'
that.id.Reward1 = 'Hadiah 1:'
that.th.Reward1 = 'รางวัล 1: '

// 福利1-回流登录2
that.en.Reward12 = 'Returner Log In'
that.ja.Reward12 = 'カムバックログインボーナス'
that.es.Reward12 = 'Inicio de sesión de retorno'
that.pt.Reward12 = 'Acesso de Retorno'
that.de.Reward12 = 'Rückkehrer-Anmeldung'
that.fr.Reward12 = 'Connexion de retour'
that.id.Reward12 = 'Login Returner'
that.th.Reward12 = 'รางวัลล็อกอินผู้กลับมาเยือน'

// 签到奖励，流失天数越多，可领取的登录奖励天数越多
that.en.Sign_in = `Sign-in rewards. The amount of the rewards increases with the days of being away.`
that.ja.Sign_in = `前回ログインからの経過日数が多ければ多いほど、ログイン報酬を受け取れる日数が増えます`
that.es.Sign_in = `Recompensas por registrarse. La cantidad de recompensas aumenta con cada día de ausencia.`
that.pt.Sign_in = `Recompensas por acessar o jogo. A quantia das recompensas aumenta conforme mais dias fora.`
that.de.Sign_in = `Anmeldebelohnungen: Die Anzahl der Belohnungen steigt mit der Anzahl der Tage, die du nicht da warst.`
that.fr.Sign_in = `Récompenses de connexion. La quantité de récompenses augmente en fonction du nombre de jours d'absence.`
that.id.Sign_in = `Hadiah sign-in. Jumlah hadiah akan meningkat seiring dengan makin banyaknya hari offline.`
that.th.Sign_in = `รางวัลจากการเข้าเล่นเกม ปริมาณของรางวัลจะเพิ่มขึ้นตามจำนวนวันที่ไม่ได้เข้ามาเล่น`

// （最低可得）
that.en.Minimum = '(Minimum receivable items)'
that.ja.Minimum = '（最低保証）'
that.es.Minimum = '(Artículos mínimos a recibir)'
that.pt.Minimum = '(Mínimo de itens recebíveis)'
that.de.Minimum = '(Mindestmenge erhältlicher Gegenstände)'
that.fr.Minimum = '(Récompenses minimales accordées)'
that.id.Minimum = '(Jumlah minimum item yang bisa diterima)'
that.th.Minimum = '(ไอเทมที่สามารถรับได้ขั้นต่ำ)'

// 福利2-回流任务
that.en.Reward2 = 'Reward 2:'
that.ja.Reward2 = '特典②'
that.es.Reward2 = 'Recompensa 2:'
that.pt.Reward2 = '2.ª recompensa:'
that.de.Reward2 = 'Belohnung 2:'
that.fr.Reward2 = 'Récompense 2 :'
that.id.Reward2 = 'Hadiah 2:'
that.th.Reward2 = 'รางวัล 2: '

// 福利2-回流任务
that.en.Reward22 = 'Returner Mission'
that.ja.Reward22 = 'カムバッククエスト'
that.es.Reward22 = 'Misión de retorno'
that.pt.Reward22 = 'Missão de Retorno'
that.de.Reward22 = 'Rückkehrer-Mission'
that.fr.Reward22 = 'Missions de retour'
that.id.Reward22 = 'Misi Returner'
that.th.Reward22 = 'ภารกิจผู้กลับมาเยือน'


// 完成每日回流任务，兑换奖励
that.en.returnerC = `Complete the daily returner mission to claim rewards.`
that.ja.returnerC = `毎日のカムバッククエストをクリアして、報酬と交換しよう`
that.es.returnerC = `Completa la misión de retorno diaria para obtener recompensas.`
that.pt.returnerC = `Conclua as missões de retorno diárias para resgatar recompensas.`
that.de.returnerC = `Schließe die tägliche Rückkehrer-Mission ab, um Belohnungen zu erhalten.`
that.fr.returnerC = `Terminez les missions de retour quotidiennes pour récupérer les récompenses.`
that.id.returnerC = `Selesaikan misi Returner harian untuk mengeklaim hadiah.`
that.th.returnerC = `เคลียร์ภารกิจผู้กลับมาเยือนรายวันเพื่อรับของรางวัล`

// 福利3-回流特权
that.en.Reward3 = 'Reward 3:'
that.ja.Reward3 = '特典③'
that.es.Reward3 = 'Recompensa 3:'
that.pt.Reward3 = '3.ª recompensa:'
that.de.Reward3 = 'Belohnung 3:'
that.fr.Reward3 = 'Récompense 3 :'
that.id.Reward3 = 'Hadiah 3:'
that.th.Reward3 = 'รางวัล 3: '


that.en.Reward32 = 'Returner Privileges'
that.ja.Reward32 = '復帰特権'
that.es.Reward32 = 'Privilegios de retorno'
that.pt.Reward32 = 'Privilégios de Retorno'
that.de.Reward32 = 'Rückkehrer-Privilegien'
that.fr.Reward32 = 'Privilèges de retour'
that.id.Reward32 = 'Keistimewaan Returner'
that.th.Reward32 = 'สิทธิพิเศษสำหรับผู้กลับมาเยือน'


// 与回流玩家组队可以额外获得回归点，鼓励帮助回流玩家
that.en.Teamup = `Team up with returned Wanderers to receive extra returner points, encouraging more Wanderers to return to the game.`
that.ja.Teamup = `現役探索者は復帰した探索者とチームを組むと、カムバックポイントを入手できる為、積極的に助けてもらえる！`
that.es.Teamup = `Únete a otros Nómadas que retornan para recibir puntos de retorno adicionales y animar a más Nómadas a regresar al juego.`
that.pt.Teamup = `Forme equipe com Errantes retornantes para receber pontos de retorno extras, encorajando mais Errantes a voltar para o jogo.`
that.de.Teamup = `Schließe dich mit anderen zurückkehrenden Wanderern zusammen, um extra Rückkehrer-Punkte zu sammeln und ermutige andere Wanderer dazu, zum Spiel zurückzukehren.`
that.fr.Teamup = `Faites équipe avec des Explorateurs de retour pour recevoir des points de retour bonus, et encourager d'autres Explorateurs à revenir dans le jeu.`
that.id.Teamup = `Bentuk tim dengan Wanderer yang kembali untuk menerima poin Returner ekstra, dan buat lebih banyak Wanderer merasa bersemangat untuk kembali ke game.`
that.th.Teamup = `ให้จับทีมร่วมกับนักพเนจรผู้กลับมาเยือนเพื่อรับแต้มพิเศษสำหรับผู้กลับมาเยือน ซึ่งจะเป็นสิ่งจูงใจให้มีนักพเนจรที่อยากกลับมาเล่นเกมอีกมากขึ้น`

// 领取途径：活动开启后前往游戏内福利界面查看规则并参与获取
that.en.participate = `How to obtain: After the event begins, go to the in-game [Rewards] page to view the rules and participate`
that.ja.participate = `入手方法：イベント開始後にゲーム内の特典画面でルールを確認し、参加すると入手できます`
that.es.participate = `Formas de obtener: Ve a la pàgina de Recompensas del Evento para ver las reglas y participa una vez que comience el evento.`
that.pt.participate = `Como obter: Acesse a página de recompensas do evento depois que ele começar para ver as regras e participar.`
that.de.participate = `So bekommst du sie: Begib dich nach Beginn des Events auf die Belohnungsseite, um die Regeln einzusehen und teilzunehmen`
that.fr.participate = `Marche à suivre : une fois l'événement commencé, rends-toi à la page des récompenses pour consulter les règles de participation.`
that.id.participate = `Cara Mendapatkan: Buka halaman Hadiah Event untuk melihat aturan dan berpartisipasi setelah event dimulai.`
that.th.participate = `เงื่อนไขรับรางวัล: ไปที่หน้ากิจกรรม รางวัล เพื่อดูกติกาและเข้าร่วมหลังจากที่กิจกรรมเริ่มต้นขึ้น`

// 维拉拓荒者
that.en.Wanderer = 'Vera Wanderer'
that.ja.Wanderer = 'ヴェラ探索者'
that.es.Wanderer = 'Nómada de Vera'
that.pt.Wanderer = 'Errante de Vera'
that.de.Wanderer = 'Vera-Wanderer'
that.fr.Wanderer = 'Explorateur de Vera'
that.id.Wanderer = 'Vera Wanderer'
that.th.Wanderer = 'นักพเนจรแห่งวีร่า'

// 漫漫黄沙
that.en.Raging = 'Raging Sands'
that.ja.Raging = '黄砂の嵐'
that.es.Raging = 'Arenas Furiosas'
that.pt.Raging = 'Deserto Furioso'
that.de.Raging = 'Tosender Sand'
that.fr.Raging = 'Sables déchaînés'
that.id.Raging = 'Raging Sands'
that.th.Raging = 'นักพเนจรแห่งวีร่า'

// 领取途径：观看Twitch幻塔专区直播达到指定时长领取掉落奖励
that.en.live = `How to obtain: Watch the Tower of Fantasy live stream on Twitch for the required duration`
that.ja.live = `入手方法：TwitchのTower of Fantasyチャンネルでライブ配信を視聴し、指定の時間に達するとドロップ報酬を受け取れます`
that.es.live = `Formas de obtener: Mira la transmisión en vivo de Tower of Fantasy en Twitch durante el tiempo indicado para obtener las recompensas.`
that.pt.live = `Como obter: Assista a transmissões ao vivo de Tower of Fantasy na Twitch durante o tempo necessário.`
that.de.live = `So bekommst du sie: Schau dir den Tower of Fantasy-Livestream auf Twitch für die erforderliche Zeit an`
that.fr.live = `Marche à suivre : regardez le streaming en direct de Tower of Fantasy sur Twitch durant la période requise.`
that.id.live = `Cara Mendapatkan: Tonton live stream Tower of Fantasy di Twitch selama periode event untuk mendapatkan hadiah.`
that.th.live = `รางวัลขั้นสุดท้ายจะแตกต่างกันไปตามระดับการมีส่วนร่วมและความแตกต่างระหว่างเหล่านักพเนจร`

that.fr.dayfr1 = `27/10-09/11`
that.de.dayfr1 = `27.10-09.11`

that.fr.dayfr2 = `01/11-14/11`
that.de.dayfr2 = `01.11-14.11`

that.fr.dayfr3 = `20/10-01/11`
that.de.dayfr3 = `20.10-01.11`

that.fr.dayfr4 = `01/11-15/11`
that.de.dayfr4 = `01.11-15.11`

that.fr.dayfr5 = `17/11-23/11`
that.de.dayfr5 = `17.11-23.11`

that.de.TWITCH = `Twitch-Drops`

that.fr.dayfr6 = `20/10-26/10`
that.de.dayfr6 = `20.10-26.10`

// 第一弹
that.en.first_shot = `ROUND 1`
that.ja.first_shot = `第一弾`
that.es.first_shot = `RONDA 1`
that.pt.first_shot = `RODADA 1`
that.de.first_shot = `RUNDE 1`
that.fr.first_shot = `1RE MANCHE`
that.id.first_shot = `PUTARAN 1`
that.th.first_shot = `รอบที่ 1`


// 第二弹
that.en.second_shot = `ROUND 2`
that.ja.second_shot = `第二弾`
that.es.second_shot = `RONDA 2`
that.pt.second_shot = `RODADA 2`
that.de.second_shot = `RUNDE 2`
that.fr.second_shot = `2E MANCHE`
that.id.second_shot = `PUTARAN 2`
that.th.second_shot = `รอบที่ 2`


// 客户要求10/20

that.en.vouchers = `Vouchers`
that.ja.vouchers = `ガチャ券`
that.es.vouchers = `Cupón`
that.pt.vouchers = `Tíquete`
that.de.vouchers = `Gutscheine`
that.fr.vouchers = `Coupons`
that.id.vouchers = `Vouchers`
that.th.vouchers = `บัตรกำนัล`






if (language.indexOf('-') > -1) {
    language = language.split('-')[0]
}
if (!languageObj.hasOwnProperty(language)) {
    language = 'en';
}

if (!language) {
    if (navigatorLanguage == 'en' || navigatorLanguage == 'ja' || navigatorLanguage == 'es' || navigatorLanguage == 'pt' || navigatorLanguage == 'de' || navigatorLanguage == 'fr' || navigatorLanguage == 'id' || navigatorLanguage == 'th') {
        language = navigatorLanguage;
    } else {
        language = 'en';
    }
};
// console.log(language)
languageObj.Init();
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? null : sParameterName[1];
        }
    }
};

$('.await').on('click', function () {
    $('.await_pop').fadeIn();
})
$('.mask').on('click', function () {
    $('.await_pop').fadeOut();
})
let remSize = window.innerWidth * 0.1
$('[fontScale]').each(function () {
    $(this).removeAttr('style');
    let setFontSize = remSize * Number($(this).attr('fontScale'));
    let currentFontSize = Number($(this).css('fontSize').replace('px', ''))
    if (setFontSize < currentFontSize) {
        let type = $(this).attr('scaleType');
        let scale = setFontSize / currentFontSize;
        if ($(this).width() > 0) {
            $(this).css({
                'width': $(this).width() / scale,
            })
        }
        let _this = $(this);
        let height = _this.height();
        let margin = parseFloat(_this.css('margin-bottom')) * scale;
        setTimeout(function () {
            if (type === 'center') {
                _this.css({
                    'transform': 'scale(' + scale + ') translate(-50%, -50%)',
                    'margin-bottom': -height * (1 - scale) + margin
                })
            } else if (type === 'centerH') {
                _this.css({
                    'transform': 'scale(' + scale + ') translate(-50%, 0)',
                    'margin-bottom': -height * (1 - scale) + margin
                })
            } else {
                _this.css({
                    'transform': 'scale(' + scale + ')',
                    'margin-bottom': -height * (1 - scale) + margin
                })
            }
        })
    }

});