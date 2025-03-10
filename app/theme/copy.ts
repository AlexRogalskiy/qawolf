import { PATCH_HANDLE } from "../lib/code";

export const copy = {
  acceptInviteLogIn: "Please log in to accept this invite",
  acceptInviteSignUp: "Please sign up to accept this invite",
  accountExists: "Already have an account?",
  accountNotExists: "No account yet?",
  action: "Action",
  add: "Add",
  addSlackChannel: "Add Slack channel",
  addSnippet: "Add snippet",
  addSnippetIntro: "Add a snippet",
  addSnippetIntro2:
    'To choose an action (like add an assertion) or selector, first click the "Choose element" button.',
  addSnippetIntro3: "Then select this text.",
  addSnippetIntro4:
    'Finally, choose "Assert page text" from the Action menu. Click the "Add snippet" button to add the assertion.',
  addTriggerToTest: "Trigger your tests to run",
  addTriggerToTestDetail:
    "Make sure your site works by running tests on a schedule, on deployment, or with an API call.",
  aka: "A.K.A.",
  alertSlack: ({
    channel,
    team_name,
  }: {
    channel: string;
    team_name?: string | null;
  }): string => `Slack ${channel}${team_name ? ` in ${team_name}` : ""}`,
  alertTeam: "Alert your team",
  alertTeamDetail: "Receive email or Slack alerts with one click.",
  alerts: "Alerts",
  alertsAlways: "Always",
  alertsChannel: "Alerts channel",
  alertsOnlyOnFailure: "Only on failure",
  alertsReceive: "Receive alerts",
  all: "All",
  allChangesCommitted: "All changes committed",
  allStatuses: "All statuses",
  allTags: "All tests",
  allTriggers: "All triggers",
  any: "Any",
  api: "API",
  apiDetail: "You can also run your tests with the QA Wolf",
  apiKeyHere: "API_KEY_HERE",
  apiTriggered: "API triggered",
  back: "Back",
  backConfirm:
    "You have not committed your changes. If you go back now, your changes will be lost.",
  backToDashboard: "Back to dashboard",
  blog: "Blog",
  branch: "Branch",
  branches: "Branches",
  branchesDetail: "Which branches do you want to test?",
  branchesPlaceholder: "Example: develop,main",
  cancel: "Cancel",
  checkEmail: "Check your email for a code",
  checkoutSuccess: "🎉 Thanks for subscribing!",
  chooseElement: "Choose element",
  chooseElementDetail:
    "Select an element, then add a snippet with your chosen action and selector.",
  chooseElementHeader: "Choose an element in the browser",
  chooseGitHubRepo: "Choose GitHub repository",
  clearFilters: "Clear filters",
  cli: "CLI",
  clickMe: "Click me",
  clickMeClicked: "Clicked!",
  close: "Close",
  code: "Code",
  codeLove: "Code you’ll 💖",
  codeLoveDetail:
    "Your test code uses the best selector and best-in-class open source tools.",
  commit: "Commit",
  communitySupport: "Community support",
  completeCount: (count: number): string => `${count} of 4 complete`,
  confirm: "Confirm",
  confirmDelete: (entity: string): string =>
    `Are you sure you want to delete the following ${entity}?`,
  connectGitHubRepo: "Connect GitHub repository",
  connectToFailures: "Connect to failing tests",
  contactUs: "Contact us",
  continue: "Continue",
  copy: "Copy",
  copyFail: "Error :(",
  copySuccess: "Copied!",
  copyright: `QA Wolf, Inc. Copyright ${new Date().getFullYear()}`,
  create: "Create",
  createCode: "Create code",
  created: "Created",
  createFirstTest: "Create your first test",
  createFirstTestDetail:
    "Create a test for a critical path to find bugs before customers do.",
  createOnline: "Create unlimited tests online",
  createSuiteDetail: "Select the environment to use when running your tests",
  createTag: "Create tag",
  createTagline: "Create tests at warp speed",
  createTeam: "Create team",
  createTest: "Create test",
  createTrigger: "Create trigger",
  curious: "Curious yet?",
  currentBill: "Current bill:",
  custom: "Custom",
  daily: "Daily",
  debugEasily: "Debug easily with a video and detailed logs",
  delete: "Delete",
  deleted: "(Deleted)",
  deleteOk: "Yes, delete",
  deleteTag: "Delete tag",
  deleteTagConfirm: "Are you sure? This will permanently delete the tag",
  deleteTagConfirm2: "but not the tests in it.",
  deleteTests: (count: number): string =>
    `Delete${count === 1 ? "" : ` ${count}`} test${count === 1 ? "" : "s"}`,
  deleteTestsDetail:
    "Are you sure? Deleting tests is permanent and cannot be undone.",
  deleteTrigger: "Delete trigger",
  delightUsers: "Delight users",
  delightUsersDetail:
    "9/10 users form a bad opinion of your brand if your app does not work.",
  deployService: "Deploy service",
  deployment: "Deployment",
  deploymentsDetail: "Which deployments do you want to test?",
  docs: "Docs",
  done: "Done",
  duration: "Duration",
  easyCi: "CI without a PhD",
  easyCiDetail:
    "Run tests in QA Wolf with one click, on every deployment, or in your own CI.",
  easyDebug: "Debugging made easy",
  easyDebugDetail:
    "Debug with video, logs, and the exact line a test failed on.",
  edit: "Edit",
  editTags: "Edit tags",
  editTagsDetail: "Choose which tags you want to assign",
  editTagsDetailNoTests: "Create, rename, and delete tags",
  editTagsForTests: (count: number): string =>
    `Edit tags${count ? ` for ${count} test${count === 1 ? "" : "s"}` : ""}`,
  editTest: "Edit test",
  editTrigger: "Edit trigger",
  email: "Email",
  emailPlaceholder: "you@awesome.com",
  emptyTestsSearch: "No tests found",
  encrypted: "Encrypted",
  enterUrl: "Enter your URL to create a test",
  envVariableDelete: "Delete environment variable",
  envVariableDeleteConfirm:
    "The following environment variable will be permanently deleted. Are you sure you want to continue?",
  envVariableNamePlaceholder: "MY_VAR",
  envVariableNew: "Create variable",
  envVariableValuePlaceholder: "value",
  envVariables: "Environment variables",
  envVariablesDetail:
    "Use environment variables for values that you don’t want visible in your code or to change the behavior of your test based on the environment",
  envVariablesEmpty: "No variables created for this environment",
  envVariablesNoEnvironment: "Please select an environment to see variables",
  environment: "Environment",
  environmentDelete: "Delete environment",
  environmentDeleteConfirm:
    "Are you sure? This will permanently delete all variables in this environment. Please type",
  environmentDeleteConfirm2: "to confirm.",
  environmentEdit: (name: string): string =>
    name ? `Edit ${name} environment` : "",
  environmentNew: "Create environment",
  environmentNotSelected: "No environment",
  environments: "Environments",
  filter: "Filter",
  frequency: "Frequency",
  frequencyDaily: "Every day",
  frequencyHourly: "Every hour",
  getCode: "Use your site — get code",
  getCode2: (wolfName: string): string => `${wolfName} it is then!`,
  getCode3: `As you use your website, test code is created on the left where it says: "${PATCH_HANDLE}".`,
  getCode4: 'Click the "Next" button below',
  getCode5: "to add the next line of test code.",
  getInTouch: "Get in touch",
  getStarted: "Get started",
  gitHub: "GitHub",
  gitHubBranchSelect: "Select GitHub branch",
  gitHubBranches: "GitHub branches",
  gitHubComplete: "🎉 All set! You can close this page.",
  gitHubRepo: "GitHub repository",
  goHome: "Go Home",
  growRevenue: "Grow revenue",
  growRevenueDetail:
    "2/3 of consumers abandon a purchase when they find a bug.",
  goBack: "Go back",
  hasAll: "Has all",
  hasAny: "Has any",
  headline: "Ship confidently",
  helpers: "Helpers",
  heroku: "Heroku",
  history: "History",
  hourly: "Hourly",
  iUnderstand: "I understand",
  implementation: "Implementation services",
  inProgress: "In progress",
  invalidUrl: "Not a valid URL",
  invite: "Enter emails to invite",
  invitePlacholder: "name@company.com",
  inviteWolfpack: "Invite your wolfpack",
  inviteWolfpackDetail:
    "Invite team members so they can see your test results and contribute to your test suite.",
  joinMailingList: "Join our mailing list",
  joinSlack: "Join Slack",
  joinWolfPack: "Join the wolf pack",
  key: "Key",
  lastUsed: "Last used",
  learnMore: "Learn more",
  learnQaWolf: "Learn how to use QA Wolf",
  learnQaWolfDetail:
    "Follow our interactive tutorial to learn the basics of QA Wolf. You will learn how to toggle code creation on/off, how to add snippets, and how to run selected lines of code.",
  learnedBasics: "Congratulations, you’ve mastered the basics of QA Wolf!",
  learnedBasics2: "Your QA Wolf",
  learnedBasics3: "will tag along for your journey.",
  learnedBasics4:
    "Click the back arrow in the top left corner to return to the dashboard.",
  loading: "Loading...",
  logIn: "Log in",
  logInWithEmail: "Log in with email",
  logInWithGitHub: "Log in with GitHub",
  loginCodeSent: "Enter the 6-letter code we sent to ",
  logOut: "Log out",
  logs: "Logs",
  loveOpenSource: "We 💖 open source",
  mailingListSubscribe: "Receive product and company updates",
  manageBilling: "Manage billing",
  manageTriggers: "Manage triggers",
  manuallyTriggered: "Manually triggered",
  meet: "Meet your QA Wolf",
  members: "Members",
  mustMatch: "Must match",
  myTests: "My tests",
  name: "Name",
  nameWolf: "Name your wolf",
  nameWolfMaxLength: "Character limit reached",
  netlify: "Netlify",
  netlifyBuildPlugin: "Install the QA Wolf Build Plugin",
  netlifyBuildVariable:
    "Set the QAWOLF_API_KEY environment variable in Netlify",
  netlifyDeployContext: "Netlify deploy context",
  next: "Next",
  netlifyGitHub: "Optional: GitHub repository for QA Wolf status checks",
  noCommas: "No commas",
  noEmail: "Please enter a valid email address",
  noHistory: "No history yet",
  noMobile:
    "Woof. We're not mobile friendly yet. Please try again on a larger screen!",
  noRuns: "No runs",
  noPassword: "Please provide your password",
  noTags: "No tags",
  none: "None",
  notAvailable: "Not available",
  notFound: "(404. Page not found.)",
  notRunYet: "Not run yet",
  notStarted: "Preparing",
  openSettings: "Open settings",
  openSourceDiscount:
    "Ask us about our free or discounted plans for open source projects.",
  or: "or",
  password: "Password",
  pending: "Pending",
  perMonth: "/month",
  placeholderInProgress: "Test in progress...",
  placeholderRunTest: 'Press the "Run test" button to run your test!',
  preview: "Preview",
  previewEnvironmentUrl: "Example preview environment URL",
  pricing: "Pricing",
  prioritySupport: "Priority support",
  production: "Production",
  qawolf: "QA Wolf",
  readDocs: "Read the docs",
  rename: "Rename",
  render: "Render",
  resetsOn: "Resets on:",
  required: "Required",
  roadmap: "Roadmap",
  run: "Run",
  runHistory: "Run history",
  runInParallel: "Run tests in 100% parallel",
  runOnDeployment: (repoName: string): string =>
    `Run on ${repoName} deployment`,
  runTagline: "Run tests without rocket science",
  runTest: "Run test",
  runTestIntro: "Run your test",
  runTestIntro2: 'Click the "Run test" button',
  runTestIntro3:
    "in the bottom right corner of the code editor to run your test.",
  runsFail: "Failing tests",
  runsInProgress: "Running tests",
  runLines: (count: number): string =>
    `Run ${count} line${count === 1 ? "" : "s"}`,
  runsPass: "Passing tests",
  runSelectedCode: "Run selected code",
  runSelectedCode2:
    "You can run specific lines of code without re-running your entire test. This is helpful for adding assertions and editing your test.",
  runSelectedCode3: "Highlight and run the last line of code,",
  runSelectedCode4: 'which will automatically click this step’s "Next" button.',
  runTests: (count: number): string =>
    `Run ${count} test${count === 1 ? "" : "s"}`,
  onPremise: "Run on premise",
  openVpn: "Connect with OpenVPN",
  other: "Other",
  otherDeploy: "Don't see the tool you use? Let us know!",
  plan: "Plan",
  pleaseType: "Please type",
  revisitTutorial: "Revisit tutorial",
  seePricing: "See pricing",
  selectedTags: "Tests with selected tags",
  selector: "Selector",
  startTutorial: "Start tutorial",
  stepCount: (count: number): string => `Step ${count} of 6`,
  tagName: "Tag name",
  tagline: "Create tests online with your team and run them in 100% parallel",
  tags: "Tags",
  toggleCreateCode: "Toggle code creation",
  toggleCreateCode2: 'Click the "Create code" toggle',
  toggleCreateCode3:
    'above the browser to turn off code creation, then click the "Click me" button below.',
  toggleCreateCode4:
    "See how no code was created? You can turn off code creation to use your site without upating your test.",
  toggleCreateCode5: "Now turn code creation back on",
  toggleCreateCode6: "and move on to the next step.",
  save: "Save",
  saveTest: "Save Test",
  schedule: "Schedule",
  scheduleOnboarding: "Schedule onboarding",
  search: "Search",
  select: "Select",
  selected: (count: number): string => `${count} selected`,
  sendInvites: "Send invites",
  setEnvVariables: "Set environment variables",
  setUp: "Set up",
  settings: "Settings",
  share: "Share run",
  shareFail: "Error copying",
  shareSuccess: "Copied link!",
  ship: "Ship",
  shipFeatures: "Ship features, not bugs",
  shipFeaturesDetail: "It costs 5x as much to fix a bug after it is released.",
  shipTagline: "Launch your product to new heights",
  signUp: "Sign up",
  signUpWithEmail: "Sign up with email",
  signUpWithGitHub: "Sign up with GitHub",
  skipBoilerplate: "Skip writing boilerplate",
  skipBoilerplateDetail:
    "Create tests 10x faster by converting your actions to code.",
  somethingWrong: "Something went wrong",
  star: "Star",
  startTesting: "Start testing",
  startTestingFree: "Start testing for free",
  startTestingFreeDetail:
    "Ship confidently with the easiest way to set up browser tests.",
  startedAt: "Started",
  status: "Status",
  stopRunning: "Stop running",
  subscribe: "Subscribe",
  subscribeSuccess: "Thanks for subscribing 🎉",
  syncToGitHub: "Sync to GitHub",
  tagsEmpty: "No tags created",
  team: "Team",
  teamMembers3: "Up to 3 team members",
  teamMembers10: "Up to 10 team members",
  teamMembersUnlimited: "Unlimited team members",
  teamName: "Team name",
  teamNamePlaceholder: "My Team",
  teamSettings: "Team settings",
  terms: "Terms",
  testAcrossBrowsers: "Test on Chrome, Firefox, and WebKit",
  testCount: (count: number): string =>
    `${count} test${count === 1 ? "" : "s"}`,
  testFail: "Fail",
  testInProgress: "Running",
  testNamePlaceholder: "Name your test",
  testPass: "Pass",
  testRuns: "Test runs",
  testRunsStarter: "100 test runs per month",
  testRunsBusiness: "1000 test runs per month",
  testRunsBusinessExtra: "$49 per 500 extra test runs",
  tests: "Tests",
  toastAutosave: "🐺 QA Wolf autosaves your tests",
  trigger: "Trigger",
  triggers: "Triggers",
  triggerDeleteConfirm:
    "Are you sure? This will permanently delete this trigger. Please type",
  triggerDeleteConfirm2: "to confirm.",
  triggersDetail:
    "Use triggers to run your tests on a schedule or on deployment.",
  triggersEmpty: "No triggers created",
  triggerId: "trigger_id",
  triggerNamePlaceholder: "Name your trigger",
  tryForFree: "Try for free",
  uncommittedChanges: "Uncommitted changes",
  uncommittedChangesAlert: "You have uncommitted changes",
  upgrade: "Upgrade",
  urlPlaceholder: "https://myawesomesite.com",
  value: "Value",
  vercel: "Vercel",
  vercelDeploymentType: "Vercel deployment type",
  video: "Video",
  watchCreate: "Watch Jon create a test",
  watchTime: "in 1 minute",
  welcome: "Welcome to QA Wolf",
  welcomeDetail:
    "Let’s start shipping confidently! Follow these steps to create, run, and maintain tests 10x faster. 🚀",
  wolfGreeting: (wolfName: string): string => {
    return `Hi, I'm ${wolfName}!`;
  },
  wolfHere: (wolfName: string): string => {
    return `${wolfName} here - `;
  },
  wolfIntro: "Nice to meet you, I'm your QA Wolf!",
  wolfIntro2: "I help you set up tests fast, so you can ship confidently.",
  wolfIntro3: "Let's start by giving me a name:",
  wolfTipCreateTest: "let's create your first test.",
  wolfTipInvite: "invite team members to assemble your wolfpack.",
  wolfTipTrigger: "run your tests on deployment or on a schedule.",
  wolfTipTutorial: "let's learn how to use QA Wolf.",
  woof: "Woof.",
  woof2: "Woof woof woof.",
  zeroSetup: "Zero setup",
  zeroSetupDetail:
    "Create your first test in minutes - no installation or setup required.",
};
