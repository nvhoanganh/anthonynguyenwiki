(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{187:function(e,t,o){"use strict";o.r(t);var r=o(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"angular-7-net-core-web-api-with-ef-core-mssql-server-vscode-azure-devops-ci-cd-azure-container-service-google-kubernetes-engine-terraform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#angular-7-net-core-web-api-with-ef-core-mssql-server-vscode-azure-devops-ci-cd-azure-container-service-google-kubernetes-engine-terraform","aria-hidden":"true"}},[e._v("#")]),e._v(" Angular 7, .NET Core Web API with EF core,MSSQL server, VsCode, Azure DevOps CI/CD, Azure Container Service, Google Kubernetes Engine, Terraform")]),e._v(" "),o("p",[e._v("This is a sample project showing the steps taken to develop a simple 3 tier application using Angular 7, .NET Core Web API with EF core and MSSQL server using open Open Source development tools (VsCode) using a Windows 10 Professional laptop. Azure DevOps is used to automate the CI/CD process and deploy to both Azure Kubernetes Service and Goolge Kubernetes Engine using Terraform")]),e._v(" "),o("h2",{attrs:{id:"step-1-install-docker-for-windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-1-install-docker-for-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 1: Install Docker for Windows")]),e._v(" "),o("ol",[o("li",[e._v("Make sure you have Windows 10 Pro or Enterprise (Docker for Windows require Hyper-V)")]),e._v(" "),o("li",[e._v("Install Docker for Windows at "),o("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/docker-for-windows/install/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Make sure Docker is running in Linux mode")])]),e._v(" "),o("h2",{attrs:{id:"step-2-create-angular-7-image"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-angular-7-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 2: Create Angular 7 image")]),e._v(" "),o("ol",[o("li",[e._v("install latest angular-cli using "),o("code",[e._v("npm i -g @angular/cli")])]),e._v(" "),o("li",[e._v("create new folder called "),o("code",[e._v("Docker")]),e._v(" somewhere on your computer")]),e._v(" "),o("li",[e._v("inside "),o("code",[e._v("Docker")]),e._v(" folder create new Angular App by using "),o("code",[e._v("ng new angular-ui")]),e._v(" command")]),e._v(" "),o("li",[e._v("inside the "),o("code",[e._v("angular-ui")]),e._v(" folder, add new file "),o("code",[e._v("nginx.conf")]),e._v(" and "),o("code",[e._v("Dockerfile")])]),e._v(" "),o("li",[e._v("create new docker image by running "),o("code",[e._v('docker build --rm -f "angular-ui\\Dockerfile" -t nvhoanganh1909/docker-demo-ui:latest angular-ui')]),e._v(" command from the root folder. "),o("strong",[e._v("Note")]),e._v(":\n"),o("ol",[o("li",[o("code",[e._v("nvhoanganh1909")]),e._v(" is your Docker Hub username.")]),e._v(" "),o("li",[o("code",[e._v("docker-demo-ui")]),e._v(" is the name of the image")]),e._v(" "),o("li",[o("code",[e._v(":latest")]),e._v(" is the tag or the version number of the image.")])])]),e._v(" "),o("li",[e._v("check to make sure image is created by running "),o("code",[e._v("docker images")]),e._v(" command")]),e._v(" "),o("li",[e._v("run the newly created image by running "),o("code",[e._v("docker run -d --rm -p 4200:80 nvhoanganh1909/docker-demo-ui:latest")]),e._v(" where")]),e._v(" "),o("li",[e._v("open http://localhost:4200 , you should see the Angular app is running")])]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("view the running docker container by running "),o("code",[e._v("docker ps")])]),e._v(" "),o("li",[e._v("stop the running container by running "),o("code",[e._v("docker container stop 0f")]),e._v(" where "),o("code",[e._v("0f")]),e._v(" is the first 2 characters of the Container ID")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("docker system prune --volumes -f")]),e._v(" to remove all unused images and containers")])]),e._v(" "),o("h2",{attrs:{id:"step-3-create-microsoft-sql-server-container-image"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-3-create-microsoft-sql-server-container-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 3: Create Microsoft SQL Server Container Image")]),e._v(" "),o("ol",[o("li",[e._v("login to "),o("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("search for "),o("code",[e._v("microsoft SQL linux")])]),e._v(" "),o("li",[e._v("select "),o("a",{attrs:{href:"https://hub.docker.com/r/microsoft/mssql-server-linux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/r/microsoft/mssql-server-linux/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("check instructions on how to use this image")]),e._v(" "),o("li",[e._v("now pull down the latest version of this image by running "),o("code",[e._v("docker pull microsoft/mssql-server-linux:latest")])]),e._v(" "),o("li",[e._v("start the container using SQLExpress mode by running "),o("code",[e._v("docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Password1' -e 'MSSQL_PID=Express' -p 1433:1433 -d microsoft/mssql-server-linux:latest")]),e._v(" (change "),o("code",[e._v("SA_PASSWORD")]),e._v(" to something else)")]),e._v(" "),o("li",[e._v("you now can connect to this SQL server using SQL Management Studio")])]),e._v(" "),o("h2",{attrs:{id:"step-4-create-new-net-core-webapi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-4-create-new-net-core-webapi","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 4: Create new .NET Core WebApi")]),e._v(" "),o("ol",[o("li",[e._v("from the root folder ("),o("code",[e._v("Docker")]),e._v("), create new folder called "),o("code",[e._v("dotnetcore-api")]),e._v(" using "),o("code",[e._v("mkdir dotnetcore-webapi")])]),e._v(" "),o("li",[e._v("cd into the "),o("code",[e._v("dotnetcore-webapi")]),e._v(" and run "),o("code",[e._v("dotnet new webapi")])]),e._v(" "),o("li",[e._v("edit "),o("code",[e._v("dotnetcore-webapi.csproj")]),e._v(" and add "),o("code",[e._v("<DockerDefaultTargetOS>Linux</DockerDefaultTargetOS>")]),e._v(" element under "),o("code",[e._v("<TargetFramework>netcoreapp2.1</TargetFramework>")]),e._v(" element.")]),e._v(" "),o("li",[e._v("in the dotnetcore-webapi folder create "),o("code",[e._v("Dockerfile")]),e._v(" and "),o("code",[e._v(".dockerignore")]),e._v(" file")]),e._v(" "),o("li",[e._v("Build the docker image by running "),o("code",[e._v('docker build --rm -f "dotnetcore-webapi\\Dockerfile" -t nvhoanganh1909/docker-demo-user-api:latest dotnetcore-webapi')]),e._v(" from the root folder")]),e._v(" "),o("li",[e._v("now run the webapi by running "),o("code",[e._v("docker run -d -p 8080:80 nvhoanganh1909/docker-demo-user-api")])]),e._v(" "),o("li",[e._v("open http://localhost:8080/api/values and you should be able to see the response from the API")])]),e._v(" "),o("h2",{attrs:{id:"step-5-create-new-net-core-api-gateway-using-ocelot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-5-create-new-net-core-api-gateway-using-ocelot","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 5: Create new .NET Core Api Gateway using Ocelot")]),e._v(" "),o("ol",[o("li",[e._v("from the root folder ("),o("code",[e._v("Docker")]),e._v("), create new folder called "),o("code",[e._v("api-gateway")])]),e._v(" "),o("li",[e._v("cd into the "),o("code",[e._v("api-gateway")]),e._v(" and run "),o("code",[e._v("dotnet new webapi")])]),e._v(" "),o("li",[e._v("add "),o("code",[e._v("ocelot")]),e._v(" nuget package")]),e._v(" "),o("li",[e._v("modify "),o("code",[e._v("Startup.cs")]),e._v(" and "),o("code",[e._v("Program.cs")]),e._v(" accordingly")])]),e._v(" "),o("p",[o("strong",[e._v("NOTE")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("Ocelot uses information stored in "),o("code",[e._v("configuration.json")]),e._v(" to route requests to the correct API. During development the configuration.json file under "),o("code",[e._v("api-gateway\\configuration")])]),e._v(" "),o("li",[e._v("When we deploy the app, we will use Volume mapping to replace this file with the correct config file")])]),e._v(" "),o("h2",{attrs:{id:"step-6-wiring-up-connections-between-containers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-6-wiring-up-connections-between-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 6: Wiring up connections between containers")]),e._v(" "),o("p",[e._v("In this step, we will add a simple User management functionality to our system using ASP .NET Identity.")]),e._v(" "),o("ol",[o("li",[e._v("Add ASP .NET Identity using SQL "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-2.2&tabs=visual-studio",target:"_blank",rel:"noopener noreferrer"}},[e._v("See Instructions"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Add Data Seeder to create 1 user called "),o("strong",[e._v("admin")])]),e._v(" "),o("li",[e._v("Create "),o("code",[e._v("UsersController.cs")]),e._v(" which expose CRUD REST endpoints at http://localhost/api/user")]),e._v(" "),o("li",[e._v("Modify Angular UI which call the api gateway and return the list of users (calling http://localhost/api/u/users)")]),e._v(" "),o("li",[e._v("Now if you run all 3 apps at the same time (Web API + Ocelot API Gateway + Angular) you should be the app running")])]),e._v(" "),o("h2",{attrs:{id:"step-7-run-the-whole-app-using-docker-compose-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-7-run-the-whole-app-using-docker-compose-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 7: Run the whole app using Docker-compose file")]),e._v(" "),o("ol",[o("li",[e._v("go to the root level ("),o("code",[e._v("Docker")]),e._v(" folder) and create new file called "),o("code",[e._v("docker-compose.yml")]),e._v(". This file describe how containers are started and stopped")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("docker-compose up")]),e._v(" to run the app")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("docker-compose down")]),e._v(" to shut down the app")])]),e._v(" "),o("h2",{attrs:{id:"step-8-pushing-images-to-docker-hub"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-8-pushing-images-to-docker-hub","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 8: Pushing images to Docker Hub")]),e._v(" "),o("ol",[o("li",[e._v("Login to docker hub by running "),o("code",[e._v("docker login -u nvhoanganh1909")])]),e._v(" "),o("li",[e._v("Tag the local image "),o("code",[e._v("docker tag f16 nvhoanganh1909/docker-demo-ui:latest")]),e._v(" where "),o("code",[e._v("f16")]),e._v(" is the first 3 characters of your imagek")]),e._v(" "),o("li",[e._v("Push the newly tagged image "),o("code",[e._v("docker push nvhoanganh1909/docker-demo-ui:latest")])]),e._v(" "),o("li",[e._v("Login to https://hub.docker.com/ and make sure you can see the new docker image")])]),e._v(" "),o("h2",{attrs:{id:"step-9-add-kubernetes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-9-add-kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 9: Add Kubernetes")]),e._v(" "),o("ol",[o("li",[e._v("From Docker for Windows Settings, turn on Kubernetes option")]),e._v(" "),o("li",[e._v("Verify Kubenetes is running by running "),o("code",[e._v("kubectl cluster-info")]),e._v(" command")]),e._v(" "),o("li",[e._v("Create new K8s namespace ("),o("a",{attrs:{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",target:"_blank",rel:"noopener noreferrer"}},[e._v("k8s-namespace"),o("OutboundLink")],1),e._v(") by running "),o("code",[e._v("kubectl create namespace dev")])]),e._v(" "),o("li",[e._v("Register user context by running "),o("code",[e._v("kubectl config set-context dev --namespace=dev --cluster=docker-for-desktop-cluster --user=docker-for-desktop")])]),e._v(" "),o("li",[e._v("Switch to dev context "),o("code",[e._v("kubectl config use-context dev")])]),e._v(" "),o("li",[e._v("Create ConfigMap "),o("code",[e._v("$ kubectl.exe create configmap webbffconfigmap --from-file=./src/api-gateway/web.bff/config/configuration.json")])]),e._v(" "),o("li",[e._v("Install "),o("code",[e._v("nginx ingress controller")]),e._v(" by running "),o("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml")]),e._v(" then run "),o("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/cloud-generic.yaml")])]),e._v(" "),o("li",[e._v("Create resources defined in the "),o("code",[e._v("k8s.yml")]),e._v(" in "),o("code",[e._v("dev")]),e._v(" context by running "),o("code",[e._v("kubectl apply -f k8s.yml --record")])]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v("kubectl get all")]),e._v(" ande make sure all services and pods are running")]),e._v(" "),o("li",[e._v("Browse http://localhost/ and make sure you can see the app running")]),e._v(" "),o("li",[e._v("At anytime you can run "),o("code",[e._v("kubectl delete daemonsets,replicasets,services,deployments,pods,rc --all --namespace=dev")]),e._v(" to remove all created resources in the dev namespace")])]),e._v(" "),o("p",[o("strong",[e._v("Notes")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("get current rollout update status "),o("code",[e._v("kubectl.exe rollout status deployments webui-deployment")])]),e._v(" "),o("li",[e._v("get Deployment history  "),o("code",[e._v("kubectl.exe rollout history deployments webui-deployment")])]),e._v(" "),o("li",[e._v("check current deployment details "),o("code",[e._v("kubectl.exe describe deploy webui-deployment")])]),e._v(" "),o("li",[e._v("to roll back "),o("code",[e._v("kubectl.exe rollout undo deployment webui-deployment --to-revision=1")])]),e._v(" "),o("li",[e._v("run Bash command inside a pod "),o("code",[e._v("kubectl.exe exec apigw-pod -i -t -- bash")])])]),e._v(" "),o("h2",{attrs:{id:"step-10-manually-deploy-to-azure-aks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-10-manually-deploy-to-azure-aks","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 10: Manually deploy to Azure AKS")]),e._v(" "),o("h3",{attrs:{id:"part-1-set-up-aks-cluster"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-1-set-up-aks-cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 1. set up AKS Cluster")]),e._v(" "),o("ol",[o("li",[e._v("create new AKS via Azure Portal")]),e._v(" "),o("li",[e._v("download and install Azure CLI")]),e._v(" "),o("li",[e._v("switch context to AKS "),o("code",[e._v("az aks get-credentials --resource-group dockertest --name dockerdemo")]),e._v(" where "),o("code",[e._v("dockertest")]),e._v(" is the resource group name and "),o("code",[e._v("dockerdemo")]),e._v(" is the name of your AKS cluster")]),e._v(" "),o("li",[e._v("install "),o("a",{attrs:{href:"https://docs.helm.sh/using_helm/#quickstart-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm"),o("OutboundLink")],1),e._v(" and add to your PATH")]),e._v(" "),o("li",[e._v("make sure current context for kubectl is your Azure AKS by running "),o("code",[e._v("kubectl.exe config current-context")]),e._v(" and "),o("code",[e._v("kubectl.exe config use-context dockerdemo")]),e._v(" to switch to the correct context")]),e._v(" "),o("li",[e._v("run (in Git Bash)")])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("helm init\nkubectl create serviceaccount --namespace kube-system tiller\nkubectl create clusterrolebinding tiller-cluster-rule --clusterrole"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cluster-admin --serviceaccount"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kube-system:tiller\nkubectl patch deploy --namespace kube-system tiller-deploy -p "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}\'')]),e._v("\n")])])]),o("h3",{attrs:{id:"part-2-install-istio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-2-install-istio","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 2: Install Istio")]),e._v(" "),o("ol",[o("li",[e._v("install Istio using Helm https://istio.io/docs/setup/kubernetes/helm-install/")])]),e._v(" "),o("h3",{attrs:{id:"part-2-create-staging-and-prod-namespace"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-2-create-staging-and-prod-namespace","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 2: Create Staging and Prod namespace")]),e._v(" "),o("ol",[o("li",[e._v("run "),o("code",[e._v("kubectl.exe create ns staging")]),e._v(" and "),o("code",[e._v("kubectl.exe create ns prod")])]),e._v(" "),o("li",[e._v("create new staging and prod context "),o("code",[e._v("kubectl config set-context dockerdemo-staging --namespace=staging --cluster=dockerdemo --user=clusterUser_dockertest_dockerdemo")]),e._v(" and "),o("code",[e._v("kubectl config set-context dockerdemo-prod --namespace=prod --cluster=dockerdemo --user=clusterUser_dockertest_dockerdemo")])])]),e._v(" "),o("h3",{attrs:{id:"part-3-create-the-app-on-staging-and-prod"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-3-create-the-app-on-staging-and-prod","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 3: Create the app on staging and prod")]),e._v(" "),o("ol",[o("li",[e._v("change context to dockerdemo-staging "),o("code",[e._v("kubectl config use-context dockerdemo-staging")])]),e._v(" "),o("li",[e._v("Create ConfigMap "),o("code",[e._v("$ kubectl.exe create configmap webbffconfigmap --from-file=./src/api-gateway/web.bff/config/configuration.json")])]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("kubectl.exe apply -f k8s.yml -f k8s.staging.yml --record")])]),e._v(" "),o("li",[e._v("wait for deployment to be completed and navigate to http://staging.52.187.236.54.xip.io/. You should see the app is now running in Azure AKS")]),e._v(" "),o("li",[e._v("Repate the step above for prod")])]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("try to delete the Prod or Staging deployment by running "),o("code",[e._v("kubectl.exe delete -f k8s.yml")])]),e._v(" "),o("li",[e._v("re-run "),o("code",[e._v("kubectl.exe apply -f k8s.yml -f k8s.prod.yml --record")])])]),e._v(" "),o("h2",{attrs:{id:"step-11-make-changes-to-angular-ui-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-11-make-changes-to-angular-ui-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 11: Make changes to Angular UI app")]),e._v(" "),o("p",[e._v("Let's make a small change to the app")]),e._v(" "),o("ul",[o("li",[e._v("switch context to dev "),o("code",[e._v("kubectl.exe config use-context dev")])]),e._v(" "),o("li",[e._v("make sure our app is running at http://localhost (if not ,just run "),o("code",[e._v("kubectl.exe apply -f k8s.yml --record")]),e._v(")")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("ng s")]),e._v(" inside "),o("code",[e._v("angular-ui")]),e._v(" folder")]),e._v(" "),o("li",[e._v("now the angular app running at http://locahost:4200 will use the api running in the local Dev cluster (http://localhost/api)")]),e._v(" "),o("li",[e._v("make the change you want to the angular app")]),e._v(" "),o("li",[e._v("build new image "),o("code",[e._v('docker build --rm -f "angular-ui\\Dockerfile" -t nvhoanganh1909/docker-demo-ui:4 angular-ui')]),e._v(" where "),o("code",[e._v("4")]),e._v(" is the new versio number")]),e._v(" "),o("li",[e._v("update k8s.yml file with the new image number "),o("code",[e._v("image: nvhoanganh1909/docker-demo-ui:4")])]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("kubectl.exe apply -f k8s.yml --record")])]),e._v(" "),o("li",[e._v("make sure new version is running at http://localhost")]),e._v(" "),o("li",[e._v("push new image to Docker hub "),o("code",[e._v("docker push nvhoanganh1909/docker-demo-ui:4")])]),e._v(" "),o("li",[e._v("switch context to "),o("code",[e._v("kubectl.exe config use-context dockerdemo-staging")])]),e._v(" "),o("li",[e._v("deploy new chages to Staging by running "),o("code",[e._v("kubectl.exe apply -f k8s.yml --record")])]),e._v(" "),o("li",[e._v("now go to http://staging.52.187.236.54.xip.io/ and you should see the new version is running")]),e._v(" "),o("li",[e._v("check http://prod.52.187.236.54.xip.io/ and you should see the old version is still running")])]),e._v(" "),o("h2",{attrs:{id:"step-12-manually-deploy-to-google-kubernetes-engine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-12-manually-deploy-to-google-kubernetes-engine","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 12: Manually Deploy to Google Kubernetes Engine")]),e._v(" "),o("p",[e._v("Now we will deploy the same app above to Google Cloud")]),e._v(" "),o("h3",{attrs:{id:"part-1-set-up-gke-cluster-with-static-ip-using-helm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-1-set-up-gke-cluster-with-static-ip-using-helm","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 1. set up GKE Cluster with static IP using HELM")]),e._v(" "),o("ul",[o("li",[e._v("Create new Google Cloud app at https://console.cloud.google.com/projectcreate , call it dockerdemo")]),e._v(" "),o("li",[e._v("Create new K8s Cluster https://console.cloud.google.com/kubernetes/add?project=dockerdemo-227313&template=your-first-cluster where dockerdemo-227313 is the newly created project Id")]),e._v(" "),o("li",[e._v("download "),o("code",[e._v("gcloud.exe")]),e._v(" from https://cloud.google.com/sdk/docs/#install_the_latest_cloud_tools_version_cloudsdk_current_version")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("gcloud container clusters get-credentials your-first-cluster-1 --zone asia-east1-a --project dockerdemo-227313")])]),e._v(" "),o("li",[e._v("view list of contexts "),o("code",[e._v("kubectl.exe config view")])]),e._v(" "),o("li",[e._v("switch to the correct context "),o("code",[e._v("kubectl.exe config use-context gke_dockerdemo-227313_asia-east1-a_your-first-cluster-1")])]),e._v(" "),o("li",[e._v("create static Ip "),o("code",[e._v("gcloud compute addresses create dockerdemo-ip --global")]),e._v(" (note, ip name must be lower case)")]),e._v(" "),o("li",[e._v("get the ip address "),o("code",[e._v("gcloud compute addresses describe dockerdemo-ip --global")])]),e._v(" "),o("li",[e._v("run the following 3 commands")])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("helm init\nkubectl create serviceaccount --namespace kube-system tiller\nkubectl create clusterrolebinding tiller-cluster-rule --clusterrole"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cluster-admin --serviceaccount"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kube-system:tiller\nkubectl patch deploy --namespace kube-system tiller-deploy -p "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}\'')]),e._v("\n")])])]),o("h3",{attrs:{id:"part-2-create-staging-and-prod-namespace-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-2-create-staging-and-prod-namespace-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 2: Create Staging and Prod namespace")]),e._v(" "),o("ol",[o("li",[e._v("run "),o("code",[e._v("kubectl.exe create ns staging")]),e._v(" and "),o("code",[e._v("kubectl.exe create ns prod")])]),e._v(" "),o("li",[e._v("create new staging and prod context "),o("code",[e._v("kubectl config set-context gke-dockerdemo-staging --namespace=staging --cluster=gke_dockerdemo-227313_asia-east1-a_your-first-cluster-1 --user=gke_dockerdemo-227313_asia-east1-a_your-first-cluster-1")]),e._v(" and "),o("code",[e._v("kubectl config set-context gke-dockerdemo-prod --namespace=prod --cluster=gke_dockerdemo-227313_asia-east1-a_your-first-cluster-1 --user=gke_dockerdemo-227313_asia-east1-a_your-first-cluster-1")])])]),e._v(" "),o("h3",{attrs:{id:"part-3-create-the-app-on-staging-and-prod-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-3-create-the-app-on-staging-and-prod-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 3: Create the app on staging and prod")]),e._v(" "),o("ol",[o("li",[e._v("change context to gke-dockerdemo-staging "),o("code",[e._v("kubectl config use-context gke-dockerdemo-staging")])]),e._v(" "),o("li",[e._v("Create ConfigMap "),o("code",[e._v("$ kubectl.exe create configmap webbffconfigmap --from-file=./src/api-gateway/web.bff/config/configuration.json")])]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("kubectl.exe apply -f k8s.yml -f k8s.staging.gke.yml --record")])]),e._v(" "),o("li",[e._v("wait for deployment to be completed and navigate to http://staging.35.241.14.155.xip.io/. You should see the app is now running in Azure AKS")]),e._v(" "),o("li",[e._v("Repate the step above for prod")])]),e._v(" "),o("h2",{attrs:{id:"step-13-automate-ci-cd-using-azure-devops"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-13-automate-ci-cd-using-azure-devops","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 13: Automate CI/CD using Azure DevOps")]),e._v(" "),o("h2",{attrs:{id:"step-12-deploy-to-azure-container-service-and-google-kubernetes-engine-using-terraform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-12-deploy-to-azure-container-service-and-google-kubernetes-engine-using-terraform","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 12: Deploy to Azure Container Service and Google Kubernetes Engine using Terraform")]),e._v(" "),o("p",[e._v("https://www.hanselman.com/blog/HowToSetUpKubernetesOnWindows10WithDockerForWindowsAndRunASPNETCore.aspx")])])},[],!1,null,null,null);t.default=a.exports}}]);