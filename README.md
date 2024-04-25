# NFT-VR-museum-backend

Backend server for VR art gallery.

## Installation

Clone the repository

```bash
git clone https://github.com/RBA-Scorpions/NFT-VR-museum-backend.git
```

Install packages

```bash
npm install
```

Run the server

```bash
npm start
```

## About

```
Base route : '/nft-vr/service/'
All other routes start from '/nft-vr/service/'

Server Url : 'http://robadrin-aks1.westeurope.cloudapp.azure.com/nft-vr/service/'
```

## Contribute

Create a PR and we will happily review and merge.

## Troubleshoot Azure kuberenetes service

Get all pods

```
kubectl get pods -n <namespace>
```

Launch interactive shell on Azure

```
kubectl exec -i -t -n <namespace> <pod name> -- /bin/bash
```

Restart deploy

```
kubectl rollout restart deployment <container-name> -n <namespace>
```

Get logs of pod

```
kubectl logs <pod-name> -n <namespace>
```
