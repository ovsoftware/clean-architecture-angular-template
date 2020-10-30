pipeline {
    agent {
        label "docker"
    }
    environment {
        HOME="../../"
    }
    options {
        disableConcurrentBuilds()
    }
    stages {

        stage("Unit-Test & SonarQube Analysis") {
            agent {
                dockerfile {
                    filename 'Dockerfile.sonar'
                    dir '.'
                    label 'docker'
                    args '-u root'
                }
            }
            steps {
                ansiColor('xterm') {
                    script {
                        branch = sh (script: "echo '${env.BRANCH_NAME}' | cut -d '/' -f2", returnStdout: true).trim()
                        CLIENT_PROJECT_NAME = "my-app ${branch}"
                        CLIENT_PROJECT_KEY = "my-app:${branch}"
                    }
                    withSonarQubeEnv('SonarQube OVSoftware') {
                        sh "cd /my-app && su && npm run sonar -- -Dsonar.projectName=\"${CLIENT_PROJECT_NAME}\" -Dsonar.projectKey=${CLIENT_PROJECT_KEY}; echo ${}?"
                    }
                }
            }
        }

	    stage ('build docker image') {
	        steps {
                ansiColor('xterm') {
                    sh 'docker build -f Dockerfile-t my-app .; echo $?'
                }
            }
        }

        stage ('deploy docker images') {
            steps {
                ansiColor('xterm') {

                    withDockerRegistry(credentialsId: 'nexus', url: 'https://docker.ovsoftware.com/') {
                        sh "docker tag my-app my-app:latest; docker push my-app:latest"
                    }
                }
            }
        }
    }
}

