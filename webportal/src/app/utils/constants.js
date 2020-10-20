// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/* eslint-disable no-template-curly-in-string */

export const MARKETPLACE_API_URL = process.env.MARKETPLACE_API_URL;

export const MARKET_ITEM_LIST = [
  {
    id: '0b41d10e-36e5-4e97-95c2-27726dd94f33',
    name: 'COVID-19 image data collection',
    author: 'ieee8023',
    type: 'data',
    categories: 'COVID-19',
    tags: ['open source dataset'],
    summary: 'Dataset of COVID-19 X-ray and CT images',
    protocol: 'covid_chestxray_dataset.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-20T04:52:48.289Z',
    updatedAt: '2020-09-20T04:52:48.289Z',
  },
  {
    id: 'e284b120-fdaf-11ea-adc1-0242ac120002',
    name: 'COVID-19 Image Data Training Job Template',
    author: 'mlmed',
    type: 'template',
    categories: 'COVID-19',
    tags: ['official example'],
    summary: 'Covid chestxray model training job',
    protocol: 'covid_chestxray_training.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-20T04:52:48.289Z',
    updatedAt: '2020-09-20T04:52:48.289Z',
  },
  {
    id: '1',
    name: 'Couplet Dataset',
    author: 'OpenPAI',
    type: 'data',
    categories: 'AI couplet',
    tags: ['official example'],
    summary: 'Dataset of couplet',
    protocol: 'couplet_dataset.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '2',
    name: 'Couplet Training Job Template',
    author: 'OpenPAI',
    type: 'template',
    categories: 'AI couplet',
    tags: ['official example'],
    summary: 'Couplet model training job',
    protocol: 'couplet_training.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '3',
    name: 'Couplet Inference Job Template',
    author: 'OpenPAI',
    type: 'template',
    categories: 'AI couplet',
    tags: ['official example'],
    summary: 'Couplet inference service with trained model',
    protocol: 'couplet_inference.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '4',
    name: 'Covid19 Dataset',
    author: 'OpenPAI',
    type: 'data',
    categories: 'AI couplet',
    tags: ['official example'],
    summary:
      'Provides up-to-date data about Coronavirus outbreak, including numbers about confirmed cases, deaths and recovered',
    protocol: 'covid_dataset.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '5',
    name: 'Covid19 Prediction Model',
    author: 'OpenPAI',
    type: 'template',
    categories: 'AI couplet',
    tags: ['official example'],
    summary:
      'This model predicts the confirmed and death number of population of different dates',
    protocol: 'covid_training.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '6',
    name: 'Covid19 Inference Service',
    author: 'OpenPAI',
    type: 'template',
    categories: 'AI couplet',
    tags: ['official example'],
    summary:
      'This is the inference service to visualize the prediction number of confirmed and death population in different countries',
    protocol: 'covid_inference.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '7',
    name: 'Grammar Check Dataset',
    author: 'OpenPAI',
    type: 'data',
    categories: 'AI couplet',
    tags: ['official example'],
    summary: 'Dataset for grammar check task',
    protocol: 'grammar_dataset.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '8',
    name: 'Grammar Check Model Training',
    author: 'OpenPAI',
    type: 'template',
    categories: 'AI couplet',
    tags: ['official example'],
    summary: 'A grammar check model training process',
    protocol: 'grammar_training.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '9',
    name: 'Grammar Check Inference Job',
    author: 'OpenPAI',
    type: 'template',
    categories: 'AI couplet',
    tags: ['official example'],
    summary: 'Grammar check inference job with trained model',
    protocol: 'grammar_inference.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '10',
    name: 'GPU Sharing Example',
    author: 'OpenPAI',
    type: 'template',
    categories: 'gpu sharing',
    tags: ['official example'],
    summary: 'GPU sharing example: two tasks share one GPU',
    protocol: 'gpu_sharing.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-22T04:52:48.289Z',
    updatedAt: '2020-09-22T04:52:48.289Z',
  },
  {
    id: '69ff3c37-1405-49a7-b9de-47e640ba490c',
    name: 'Caffe2 Minist Example',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A caffe minist example',
    protocol: 'caffe-mnist.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '9d3fbdad-dd82-429c-a368-f3d7b41717b5',
    name: 'Caffe2 ResNet50 Example',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A caffe resnet50 example',
    protocol: 'caffe2-resnet50.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '5fa59045-c3f8-4243-88ff-89a1034681d8',
    name: 'Chainer Example',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A chainer example',
    protocol: 'chainer-cifar.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: 'd5f357d0-70cc-435c-92f2-21d63c7a1513',
    name: 'Horovod Pytorch',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A horovod pytorch example',
    protocol: 'horovod-pytorch-synthetic-benchmark.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '55a21b76-abbe-4f75-9b09-ed0ee3accc16',
    name: 'Keras Tensorflow Mnist Example',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A keras tensorflow minist example',
    protocol: 'keras-tensorflow-mnist.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '56a0d871-fe2d-43ce-b26c-b89b9c0646fd',
    name: 'Mxnet Autoencoder Example',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A Mxnet Autoencoder Example',
    protocol: 'mxnet-autoencoder.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: 'cc42d399-06d8-4b93-9e84-e5f609ef0c73',
    name: 'Pytorch Mnist Example',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A Pytorch Mnist Example',
    protocol: 'pytorch-mnist.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '1c7efdef-40da-46d0-bdea-16c25e560380',
    name: 'Pytorch Regression Example',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A Pytorch Regression Example',
    protocol: 'pytorch-regression.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '80cf9714-de4e-480b-8e26-66f529dbff6d',
    name: 'Rocm Pytorch Mnist',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A Rocm Pytorch Example',
    protocol: 'rocm-pytorch-mnist.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '44cbad87-c2d5-4433-9890-0883f07e3912',
    name: 'rocm_tensorflow2',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A Rocm Tensorflow2 Example',
    protocol: 'rocm-tensorflow2.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '17c2500d-94ed-4e2d-af74-e1ace47987af',
    name: 'sklearn_text_vectorizers',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A Scikit-learn Example',
    protocol: 'sklearn-text-vectorizers.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '4fb02608-3769-475c-a0c2-c2155fb03c4f',
    name: 'tensorflow_cifar10',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A Tensorflow Distributed Example',
    protocol: 'tensorflow-cifar10.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-07-28T04:52:48.289Z',
    updatedAt: '2020-07-28T04:52:48.289Z',
  },
  {
    id: '74c8ab09-6225-4982-8145-5be0b5c55a28',
    name: 'tensorflow_serving_mnist',
    author: 'OpenPAI',
    type: 'old',
    categories: ['official example'],
    tags: ['official example'],
    summary: 'A Tensorflow Mnist Model Example',
    protocol: 'tensorflow-serving-mnist.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-08-15T04:52:48.289Z',
    updatedAt: '2020-08-15T04:52:48.289Z',
  },
  {
    id: '11',
    name: 'cifar10-single-mul-DDP-gloo',
    author: 'OpenPAI',
    type: 'template',
    categories: ['distributed example'],
    tags: ['official example'],
    summary: 'Pytorch Cifar10 Example',
    protocol: 'cifar10-single-mul-DDP-gloo.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-23T14:52:48.289Z',
    updatedAt: '2020-09-23T14:52:48.289Z',
  },
  {
    id: '12',
    name: 'cifar10-single-mul-DDP-gloo-Apex-mixed',
    author: 'OpenPAI',
    type: 'template',
    categories: ['distributed example'],
    tags: ['official example'],
    summary: 'Pytorch Cifar10 Example',
    protocol: 'cifar10-single-mul-DDP-gloo-Apex-mixed.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-23T14:52:48.289Z',
    updatedAt: '2020-09-23T14:52:48.289Z',
  },
  {
    id: '13',
    name: 'cifar10-single-mul-DDP-nccl',
    author: 'OpenPAI',
    type: 'template',
    categories: ['distributed example'],
    tags: ['official example'],
    summary: 'Pytorch Cifar10 Example',
    protocol: 'cifar10-single-mul-DDP-nccl.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-23T14:52:48.289Z',
    updatedAt: '2020-09-23T14:52:48.289Z',
  },
  {
    id: '14',
    name: 'cifar10-single-mul-DDP-nccl-Apex-mixed',
    author: 'OpenPAI',
    type: 'template',
    categories: ['distributed example'],
    tags: ['official example'],
    summary: 'Pytorch Cifar10 Example',
    protocol: 'cifar10-single-mul-DDP-nccl-Apex-mixed.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-23T14:52:48.289Z',
    updatedAt: '2020-09-23T14:52:48.289Z',
  },
  {
    id: '15',
    name: 'cifar10-single-node-gpus-cpu-DP',
    author: 'OpenPAI',
    type: 'template',
    categories: ['distributed example'],
    tags: ['official example'],
    summary: 'Pytorch Cifar10 Example',
    protocol: 'cifar10-single-node-gpus-cpu-DP.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-23T14:52:48.289Z',
    updatedAt: '2020-09-23T14:52:48.289Z',
  },
  {
    id: '16',
    name: 'Lite-imagenet-single-mul-DDP-gloo',
    author: 'OpenPAI',
    type: 'template',
    categories: ['distributed example'],
    tags: ['official example'],
    summary: 'Pytorch Imagenet Example',
    protocol: 'Lite-imagenet-single-mul-DDP-gloo.yaml',
    useNumber: 0,
    starNumber: 0,
    status: 'approved',
    createdAt: '2020-09-23T14:52:48.289Z',
    updatedAt: '2020-09-23T14:52:48.289Z',
  },
];
