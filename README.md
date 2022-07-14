# 1. form-table-practice
some form-table with react-components practice.
### 建置 webpack 環境, 藉由 React 實作簡單 CRUD 操作頁面
* 下載 05-practice.html, 在檔案系統環境中預覽網頁結果。
* git clone 整個 repository, 在專案資料夾使用 webpack-dev-server 預覽網頁結果
```CLI
git clone https://github.com/xi-wei-kao/form-table-practice.git 放置到資料夾名稱【如: form-table】
```
```CLI
cd form-table
```
```CLI
npm run start
```

# 2. python 小型作品
一些網路爬蟲、深度學習實作小型作品(python 資料夾中)
### 網路爬蟲系列
* crawler-pr-vol.py: 實現抓取 PCHOME 股市, 每日個股價量資料並存取成 csv 檔案。
* taipei-bus.ipynb 以及 taichung-bus.py: 實現公車動態資料自動化抓取, 為了過去工作上所需。
### 深度學習系列
* crawler-picture.py: 實現自動化抓取線上搜尋引擎的汽車圖片, 為了深度學習模型的 training-data & testing-data 所需。
* 02.my-models.ipynb: 利用 PyTorch 套件, 將上面汽車圖片投入訓練。 
  * 實現簡單 CNN(卷積神經網路) 監督式學習, 分辨為轎車(sedan)或休旅車(SUV)。
  * 實現簡單 auto-encorder(自編碼器), 將汽車圖片進行檔案壓縮及模型可理解之編碼, 並且嘗試還原圖片。
