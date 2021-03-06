let topics = [
    {key: 'bigdata', value: 'bigdata', text: 'bigdata', name: 'bigdata', full: 'Big Data'},
    {key: 'iot', value: 'iot', text: 'iot', name: 'iot', full: 'Internet of Things'},
    {key: 'ml', value: 'ml', text: 'ml', name: 'ml', full: 'Machine Learning'},
    {key: 'ai', value: 'ai', text: 'ai', name: 'ai', full: 'Artificial Inteligence'},
    {key: 'python', value: 'python', text: 'python', name: 'python', full: 'Python'},
    {key: 'javascript', value: 'javascript', text: 'javascript', name: 'javascript', full: 'JavaScript'},
    {key: 'r', value: 'r', text: 'r', name: 'r', full: 'R Language'},
    {key: 'marketing', value: 'marketing', text: 'marketing', name: 'marketing', full: 'Marketing'},
    {key: 'fintech', value: 'fintech', text: 'fintech', name: 'fintech', full: 'Financial Tech'},
    {key: 'startup', value: 'startup', text: 'startup', name: 'startup', full: 'Startups'},
    {key: 'bot', value: 'bot', text: 'bot', name: 'bot', full: 'Bot'},
    {key: 'linux', value: 'linux', text: 'linux', name: 'linux', full: 'Linux, GNU'},
    {key: 'go', value: 'go', text: 'go', name: 'go', full: 'Golang'},
    {key: 'growthhack', value: 'growthhack', text: 'growthhack', name: 'growthhack', full: 'Growth Hacking'},
    {key: 'cloud', value: 'cloud', text: 'cloud', name: 'cloud', full: 'Cloud Computing'},
    {key: 'nodejs', value: 'nodejs', text: 'nodejs', name: 'nodejs', full: 'Node'},
    {key: 'express', value: 'express', text: 'express', name: 'express', full: 'ExpressJS'},
    {key: 'mongodb', value: 'mongodb', text: 'mongodb', name: 'mongodb', full: 'Mongo Database'},
    {key: 'sql', value: 'sql', text: 'sql', name: 'sql', full: 'SQL'},
    {key: 'adf', value: 'adf', text: 'adf', name: 'adf', full: 'Oracle ADF'},
    {key: 'git', value: 'git', text: 'git', name: 'git', full: 'Git'},
    {key: 'react', value: 'react', text: 'react', name: 'react', full: 'ReactJS'},
    {key: 'ui', value: 'ui', text: 'ui', name: 'ui', full: 'User Interface Design'},
    {key: 'ux', value: 'ux', text: 'ux', name: 'ux', full: 'User Experience Design'},
    {key: 'angular', value: 'angular', text: 'angular', name: 'angular', full: 'AngularJS'},
    {key: 'e-commerce', value: 'e-commerce', text: 'e-commerce', name: 'e-commerce', full: 'E-Commerce'},
    {key: 'code', value: 'code', text: 'code', name: 'code', full: 'Coding'},
    {key: 'programming', value: 'programming', text: 'programming', name: 'programming', full: 'Programming'},
    {key: 'wearables', value: 'wearables', text: 'wearables', name: 'wearables', full: 'Wearable Gadgets'},
    {key: 'laptops', value: 'laptops', text: 'laptops', name: 'laptops', full: 'Laptops'},
    {key: 'phones', value: 'phones', text: 'phones', name: 'phones', full: 'Mobile Phones'},
    {key: 'hadoop', value: 'hadoop', text: 'hadoop', name: 'hadoop', full: 'Hadoop'},
    {key: 'servers', value: 'servers', text: 'servers', name: 'servers', full: 'Servers'},
    {key: 'analytics', value: 'analytics', text: 'analytics', name: 'analytics', full: 'Analytics'},
    {key: 'devops', value: 'devops', text: 'devops', name: 'devops', full: 'DevOps'},
    {key: 'datascience', value: 'datascience', text: 'datascience', name: 'datascience', full: 'DataScience'},
    {key: 'seo', value: 'seo', text: 'seo', name: 'seo', full: 'Search Engine Opt'},
    {key: 'html-css', value: 'html-css', text: 'html-css', name: 'html-css', full: 'Html & CSS'},
    {key: 'oracle', value: 'oracle', text: 'oracle', name: 'oracle', full: 'Oracle'},
    {key: 'pentesting', value: 'pentesting', text: 'pentesting', name: 'pentesting', full: 'Penetration Testing'},
    {key: 'java', value: 'java', text: 'java', name: 'java', full: 'Java'},
    {key: 'security', value: 'security', text: 'security', name: 'security', full: 'Security'}
]
let t = {}

for (let i = 0; i < topics.length; i++) {
  t[topics[i].key] = topics[i]
  if (i === topics.length - 1) {
    console.log(t)
  }
}
