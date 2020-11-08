import enLocale from 'element-ui/lib/locale/lang/en'

const en = {
    message: {

        'save': 'save',
        'cancel': 'cancel',
        'refresh': 'refresh',
        'query': 'query',
        'reset': 'reset',
        'keyword': 'keyword',
        'run': 'run',
        'edit': 'edit',
        'delete': 'delete',
        'success': 'success',
        'failed': 'failed',
        'detail': 'detail',
        'download': 'download',
        'stop': 'stop',
        'back': 'back',
        'all': 'ALL',
        'more': '| more',

        // 欢迎界面
        'appRegister': 'App Registration',
        'userRegister': 'User Registration',
        'appNameInputPLH': 'Enter The AppName',
        'appName': 'AppName',
        'appPassword': 'AppPassword',
        'register': 'register',
        'name': 'name',
        'phone': 'phone',
        'email': 'email',
        'welcomeTitle': 'Welcome to use PowerJob!',
        'login': 'Login',
        'logout': 'Logout',
        'changeAppInfo': 'Change AppInfo',
        'newPassword': 'New Password',
        'newPassword2': 'Check New Password',
        'stayLogged': 'Keep me logged in',

        'tabHome': 'Home',
        'tabJobManage': 'JobManage',
        'tabJobInstance': 'JobInstance',
        'tabWorkflowManage': 'WorkflowManage',
        'tabWfInstance': 'WorkflowInstance',
        'tabContainerOps': 'ContainerOps',
        'tabTemplate': 'TemplateGenerator',
        'tabContainerManager': 'ContainerManager',

        'omsServerTime': 'Server Time',
        'omsServerTimezone': 'Server Timezone',
        'localBrowserTime': 'Local Time',
        'localBrowserTimezone': 'Local Timezone',
        'githubURL': 'GitHub Repo',
        'docURL': 'Document Address',
        'totalJobNum': 'total job Num',
        'runningInstanceNum': 'running instance num',
        'recentFailedInstanceNum': 'recent failed instance Num',
        'workerNum': 'worker cluster size',
        'workerAddress': 'worker address',
        'cpuLoad': 'CPU Load',
        'memoryLoad': 'Memory Load',
        'diskLoad': 'Disk Load',

        // JobManage
        'jobId': 'JobID',
        'instanceId': 'InstanceID',
        'jobName': 'JobName',
        'scheduleInfo': 'ScheduleInfo',
        'executeType': 'ExecuteType',
        'processorType': 'ProcessorType',
        'status': 'status',
        'operation': 'operation',
        'newJob': 'New Job',
        'jobDescription': 'JobDescription',
        'jobParams': 'JobParams',
        'timeExpressionType': 'TimeExpressionType',
        'timeExpressionPlaceHolder': 'cron expression or number(millions) for fix_rate/fix_delay job',
        'executeConfig': 'ExecuteConfig',
        'javaProcessorInfoPLH': 'classname, eg: com.github.kfcfans.DemoProcessor',
        'containerProcessorInfoPLH': 'containerID#classname, eg: 1#com.github.kfcfans.DemoProcessor',
        'shellProcessorInfoPLH': 'shell script',
        'pythonProcessorInfoPLH': 'python script',
        'runtimeConfig': 'RuntimeConfig',
        'maxInstanceNum': 'MaxInstanceNum',
        'threadConcurrency': 'ThreadConcurrency',
        'timeout': 'TimeLimit (ms)',
        'retryConfig': 'RetryConfig',
        'taskRetryTimes': 'InstanceRetryTimes',
        'subTaskRetryTimes': "TaskRetryTimes",
        'workerConfig': 'WorkerConfig',
        'minCPU': 'MinAvailableCPUCores',
        'minMemory': 'MinMemory(GB)',
        'minDisk': 'MinDisk(GB)',
        'clusterConfig': 'ClusterConfig',
        'designatedWorkerAddress': 'DesignatedWorkerAddress',
        'designatedWorkerAddressPLH': 'empty for all worker or IP:Port,IP:Port ...',
        'maxWorkerNum': 'MaxWorkerNum',
        'maxWorkerNumPLH': '0 means no limit',
        'alarmConfig': 'AlarmConfig',
        'alarmSelectorPLH': 'select alarm recipient ',
        'standalone': 'Standalone',
        'broadcast': 'Broadcast',
        'map': 'MAP',
        'mapReduce': 'MapReduce',
        'fixRate': 'Fix Rate (ms)',
        'fixDelay': 'Fix Delay (ms)',
        'workflow': 'workflow',
        'javaContainer': 'Java（Container）',
        'runHistory': 'history',
        'reRun': 'retry',

        // JobInstance
        'wfInstanceId': 'WorkflowInstanceId',
        'normalInstance': 'normal instance',
        'wfInstance': 'workflow instance',
        'triggerTime': 'trigger time',
        'finishedTime': 'finished time',
        'log': 'log',
        'runningTimes': 'running times',
        'taskTrackerAddress': 'taskTracker address',
        'startTime': 'start time',
        'expectedTriggerTime': 'expected trigger time',
        'result': 'result',
        'subTaskInfo': 'task info',
        'secondlyJobHistory': 'secondlyJobHistory',
        'subInstanceId': 'subInstanceId',
        'instanceParams': 'instanceParams',

        // workflowManage
        'wfId': 'WorkflowID',
        'wfName': 'WorkflowName',
        'newWorkflow': 'new workflow',
        'wfDescription': 'description',
        'importJob': 'import job',
        'deleteJob': 'delete job',
        'newStartPoint': 'new starting point',
        'newEndPoint': 'new ending point',
        'deleteEdge': 'delete edge',
        'importJobTitle': "select jobs",
        'wfTimeExpressionPLH': 'cron expression for CRON or empty for API',
        'import': 'import',
        'ntfClickNeedDeleteNode': 'Please click on the node you want to delete.',
        'ntfClickStartPoint': 'Please click on the start node',
        'ntfClickTargetPoint': 'Please click on the end node',
        'ntfClickDeleteEdge': 'Please click on the edge you want to remove.',
        'ntfAddStartPointFirst': 'Please add the starting point first!',
        'ntfInvalidEdge': 'Illegal operation (same origin and destination)!',

        // workflowInstance
        'wfTips': 'tips：Click on a node to view details of the job instance',
        'ntfClickWaitingNode': 'Waiting for the upstream instances... No instances have been generated, and details cannot be viewed!',
        'wfInitParams': 'initParams',

        // 容器
        'newContainer': 'new container',
        'containerType': 'type',
        'containerGitURL': 'Git URL',
        'branchName': 'branch',
        'username': 'username',
        'password': 'password',
        'containerId': 'ID',
        'containerName': 'name',
        'containerVersion': 'version',
        'deployTime': 'deployed time',
        'deploy': 'deploy',
        'deployedWorkerList': 'worker list',
        'uploadTips': 'Drag and drop or click on the file to upload it automatically',

        // 任务实例状态
        'waitingDispatch': 'waiting dispatch',
        'waitingWorkerReceive': 'waiting receive',
        'running': 'running',
        'stopped': 'stopped',
        'canceled': 'canceled',
        'wfWaiting': 'waiting',
        'waitingUpstream': 'waiting upstream'

    },
    ...enLocale
};

export default en
