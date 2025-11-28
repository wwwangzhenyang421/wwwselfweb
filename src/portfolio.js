const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#top',
  title: 'WZY.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Wang Zhenyang',
  role: 'Backend Developer, AI Backend Developer, AI Application Developer',
  picture: 'myphoto.jpg',

  description:
    '电子科技大学软件工程专业大四在读学生，专注于后端开发、AI后端开发及AI应用开发。研究生预计就读于香港中文大学人工智能专业，毕业于2028年3月。',
  // 简历链接：可以使用以下任一方式
  // 方式1: 本地PDF文件（放在 public 文件夹中），例如：'/resume.pdf'
  // 方式2: 在线链接（Google Drive、OneDrive、GitHub Releases等），例如：'https://your-resume-link.com'
  resume: 'https://drive.google.com/file/d/1Rjijb8qs3euAVzGWHLcBW-mZoBZ1Tszk/view?usp=sharing', // 请将你的简历PDF文件命名为 resume.pdf 并放在 public 文件夹中
  social: {
    linkedin: '',
    github: 'https://github.com/wwwangzhenyang421',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '五子棋人机对弈',
    description:
      '基于前端技术开发的五子棋游戏，实现人机对弈功能。采用贪心算法，提供流畅的游戏体验和直观的界面交互。',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Canvas', 'React.js'],
    sourceCode: 'https://github.com/wwwangzhenyang421/gomoku',
    livePreview: 'https://wwwangzhenyang421.github.io/gomoku/',
    image: 'pro1.png',
  },
  {
    name: '植物大战僵尸基础版',
    description:
      '经典塔防游戏的基础版本，包含豌豆射手、向日葵、坚果等植物，支持水池和草地两种场景，采用5×9格子布局，实现完整的游戏机制和动画效果。',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Canvas', 'React.js'],
    sourceCode: 'https://github.com/wwwangzhenyang421/plants-vs-zombies',
    livePreview: 'https://wwwangzhenyang421.github.io/plants-vs-zombies/',
    image: 'pro2.png',
  },
  {
    name: 'SmartNote：笔记管理分析智能助手',
    description:
      '基于Flask的AI笔记增强应用，通过RAG和双智能体架构实现笔记自动结构化，支持PDF/文本上传、自然语言查询，生成思维导图式结构化笔记。',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'LangChain', 'HuggingFace Transformers', 'PyPDF2', 'WebSockets', 'RAG'],
    sourceCode: 'https://github.com/wwwangzhenyang421',
    livePreview: 'https://github.com/wwwangzhenyang421',
    image: 'pro3.png',
  },
  {
    name: '12306 铁路购票系统',
    description:
      '高并发铁路购票系统，支持百万级并发请求，提供车票查询、订单管理、在线支付、退票改签等全流程服务，采用Redis缓存、RocketMQ消息队列和Sentinel限流保障系统稳定性。',
    stack: ['Java', 'SpringBoot', 'SpringCloudAlibaba', 'MySQL', 'Redis', 'RocketMQ', 'ShardingSphere', 'Sentinel'],
    sourceCode: 'https://github.com/wwwangzhenyang421',
    livePreview: 'https://github.com/wwwangzhenyang421',
    image: 'pro4.png',
  },
  {
    name: '求职中介微服务平台',
    description:
      '适配网页和微信小程序的求职中介平台，基于Spring Cloud Alibaba微服务架构，实现精准职位匹配、实时通信和费用结算，采用Elasticsearch检索和WebSocket实时通信。',
    stack: ['Java', 'Spring Boot', 'Spring Cloud Alibaba', 'MySQL', 'Redis', 'Elasticsearch', 'WebSocket', '微信小程序 SDK', 'MyBatis-Plus'],
    sourceCode: 'https://github.com/wwwangzhenyang421',
    livePreview: 'https://github.com/wwwangzhenyang421',
    image: 'pro5.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C',
  'Java',
  'PyTorch',
  'Flask',
  'Transformer',
  'Spring Boot',
  'MyBatis',
  'MySQL',
  'Redis',
  'RocketMQ',
  'Elasticsearch',
  'LangChain',
  'SQLAlchemy',
  'WebSocket',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '2041078883@qq.com',
}

export { header, about, projects, skills, contact }
