export type Project = {
  title: string
  startDate: string
  endDate?: string
  period?: string
  works: string[]
  skills: string[]
}

export const projectData: Project[] = [
  {
    title: '飲食向け受発注システム開発',
    startDate: '2021/01',
    works: [
      '卸業者向け受注Webアプリの画面設計・実装',
      '飲食店向け発注Webアプリの画面設計・実装',
      '社内向け管理画面の画面設計・実装',
      'Atomic Design導入支援',
      'レスポンシブデザイン化対応',
      'Vue、Nuxtバージョンアップ対応',
    ],
    skills: ['Nuxt.js', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'マーケティングツールWebアプリ開発',
    startDate: '2020/09',
    endDate: '2020/12',
    period: '4か月',
    works: [
      'マーケティングツールWebアプリの画面設計・実装',
      'Slim+Pug+jQueryからVue.jsへの移行対応',
      'APIの設計・実装',
      'バッチ機能（集計）の設計・実装',
    ],
    skills: ['Vue.js', 'jQuery', 'HTML', 'CSS', 'Ruby on Rails'],
  },
  {
    title: '建築資材ECサイトシステム開発',
    startDate: '2020/04',
    endDate: '2020/08',
    period: '5か月',
    works: [
      'ECサイトの画面設計・実装',
      'APIの設計・実装',
      '社内向け管理画面の画面設計・実装',
      '開発環境の整備',
    ],
    skills: ['Nuxt.js', 'HTML', 'CSS', 'Laravel', 'Vagrant'],
  },
  {
    title: 'ファンコミュニティサイトシステム開発',
    startDate: '2019/03',
    endDate: '2020/03',
    period: '1年1か月',
    works: [
      'ファンコミュニティサイトの画面設計・実装',
      'APIの設計・実装',
      'バッチ機能（集計、アラート等）の設計・実装',
      '社内向け管理画面の画面設計・実装',
      'テスト用環境の整備',
      '外部開発チームのマネジメント',
    ],
    skills: ['Vue.js', 'HTML', 'CSS', 'Laravel', 'AWS', 'Jenkins'],
  },
  {
    title: 'Web面接システム開発',
    startDate: '2018/09',
    endDate: '2019/02',
    period: '6か月',
    works: [
      'APIの設計・実装',
      '社内向け管理画面の画面設計・実装',
      'ログ集積基盤構築',
      '開発環境の整備',
    ],
    skills: ['FuelPHP', 'jQuery', 'HTML', 'CSS', 'Elasticsearch', 'Docker'],
  },
  {
    title: 'クラウドファンディングサイトシステム開発',
    startDate: '2017/11',
    endDate: '2018/08',
    period: '10か月',
    works: [
      'クラウドファンディングサイトの画面設計・実装',
      'APIの設計・実装',
      '社内向け管理画面の画面設計・実装',
      'コーポレートサイトの画面設計・実装',
      '社内向け各種ITサポート',
    ],
    skills: ['Phalcon', 'jQuery', 'HTML', 'CSS'],
  },
  {
    title: '金融系システム開発',
    startDate: '2015/04',
    endDate: '2017/10',
    period: '2年7か月',
    works: [
      'クレジットカード金額計算システムの設計・実装',
      '投資家向け取引システム設計・実装',
      'ERPパッケージ導入支援',
      '新入社員向け研修業務',
    ],
    skills: ['Java', 'JavaScript', 'VBA'],
  },
]
