call az aks get-credentials --resource-group suburbranking --name suburbranking
call az aks install-cli
set PATH=%PATH%;C:\Users\VssAdministrator\.azure-kubectl
call kubectl get pods

echo Checking Build number $(Build.BuildId)
kubectl set image deployment/rbus-wiki-app-dev worker=nvhoanganh1909/wiki:v$(Build.BuildId)