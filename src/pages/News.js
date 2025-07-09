import React from 'react';
import banner from '../assets/images/company news.jpg'; // Rename 'factory.jpg' to 'news-banner.jpg'

const News = () => {
  return (
    <div>
      <img src={banner} alt="Estlion Factory" className="page-banner" />
      <h1 className="page-title">Company News</h1>

      <div className="news-item">
        <h3>Good news! Full container order for EDE6500T/T3, EDE7000T/T3 with same quantity gifts.</h3>
        <p className="date">DEC. 15, 2019</p>
        <p>
          Full container order for EDE6500T/T3, EDE7000T/T3 with same quantity gifts. The period is from Jan. 1, 2020 to Mar. 30, 2020. Points: for all the purchasing of container order for EDE6500T/T3, EDE7000T/T3 up to end of Mar 2020, you will get the same quantity T-shirts or Caps with our logo.
        </p>
      </div>

      <div className="news-item">
        <h3>Good news! 2018 Christmas and 2019 New Year promotion.</h3>
        <p className="date">DEC 1, 2018</p>
        <p>
          Estlion decides to issue 2018 Christmas and 2019 New Year promotion. The period is from Nov. 1, 2018 to Jan. 31, 2019. During the above period, to reach our min quantity order, you will receive up to 10% discount.
        </p>
      </div>

       <div className="news-item">
        <h3>Company celebrates its customers from the 120th country.</h3>
        <p className="date">NOV. 10, 2018</p>
        <p>
          With the increasing of market and sales, Estlion products have been sold into more than 100 countries in the world. After the signature of contract with a customer from Iceland, the company calculated that Estlion has entered up to 120 countries.
        </p>
      </div>
    </div>
  );
};

export default News;