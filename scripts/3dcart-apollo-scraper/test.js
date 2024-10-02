const fetchEmails = async (entities = []) => {
  const body = JSON.stringify({
    entity_ids: [
      "5e7bdb7ece6f05000160cf13",
      "6319d1d4a4901c000102a85b",
      "65df09cd7bc67700013f4248",
      "6119ebb5632863000165f8a4",
      "611cdebcac48ca0001a98075",
      "6281d424d8387200018d1184",
      "5e75973041d0c6000141a469",
      "54a60c1574686936766692bd",
      "54a786e5746869730a8f913d",
      "6461e43d162cf30001931699",
      "62878b54d37407000176314d",
      "55c1446373696432a5ea1300",
      "54a3be7a746869367630350f",
      "57d48cb0a6da9853ce98a230",
      "54a4df7f7468692cf012336a",
      "54a4d6ba7468693b8c306a67",
      "57df575da6da980b4a089ee0",
      "54aa8b857468690b7539220a",
      "64eee4372b5d160001696df2",
      "62a085c6669d3500015b16b8",
      "55708ef17369644111f50100",
      "62cace711b93b10001c4a650",
      "55706fdd7369646f12023800",
      "60df50a3a1f21800018be5c2",
      "54ab4b6c746869084be3a001",
    ],
    analytics_context: "Searcher: Individual Add Button",
    skip_fetching_people: true,
    cta_name: "Access email",
  });
  console.log("body", body);
  const result = await fetch(
    "https://app.apollo.io/api/v1/mixed_people/add_to_my_prospects",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-csrf-token":
          "dzfbLeZ91VqRMVJZ-LiAzcTAPNI6-ca0-bw-ZTEgSsuhMBB4Rq0Cb5myTfaZpx8ox0-vNTVbDOfGyIo5OSslrg",
        cookie:
          "mutiny.user.token=2b9089af-5c5e-4df1-9b7c-412e744c11a0; zp__initial_utm_medium=(none); zp__initial_utm_source=(direct); _gcl_au=1.1.26343799.1725392198; hubspotutk=753bf0b4e56e0d3e3f8558d4484f3e38; __hssrc=1; _ga=GA1.1.811568728.1725392198; _fbp=fb.1.1725392198463.801523676340904942; _tt_enable_cookie=1; _ttp=OzTEHvBw9aKHRoYOXPreBTAeUS_; _cioanonid=5f309d09-c45d-16ef-41f2-ae8d57dfc70a; ZP_Pricing_Split_Test_Variant=24Q3_W59_V2; zp__initial_referrer=https://accounts.google.com/; _hjSessionUser_3601622=eyJpZCI6ImRiMzg5YTlmLTc3YTAtNTNkMi04NzRhLWNkZTU0MDFhNDhjOCIsImNyZWF0ZWQiOjE3MjUzOTIxOTg4MTksImV4aXN0aW5nIjp0cnVlfQ==; pscd=get.apollo.io; ZP_LATEST_LOGIN_PRICING_VARIANT=24Q3_W59_V2; intercom-device-id-dyws6i9m=7980e235-a8db-4f79-9dd4-967ef06c069a; _cioid=66d7655b685d8002d06d5abe; __stripe_mid=f9be13e7-3073-4e48-84f7-0555e25e0c33507dea; zp__initial_landing_page=https://www.apollo.io/; _clck=jiqdm1%7C2%7Cfp7%7C0%7C1707; zp__utm_content=general; zp__initial_utm_content=general; zp__utm_medium=cpc; zp__utm_campaign=pmax; zp__initial_utm_campaign=pmax; zp__gclid=Cj0KCQjwi5q3BhCiARIsAJCfuZk7F8uOLbx3XPODgeFa8h0D8YV_GoF21lonIJTK4z8VntGwvb6x8nsaAkF-EALw_wcB; _gcl_aw=GCL.1726397322.Cj0KCQjwi5q3BhCiARIsAJCfuZk7F8uOLbx3XPODgeFa8h0D8YV_GoF21lonIJTK4z8VntGwvb6x8nsaAkF-EALw_wcB; _gcl_gs=2.1.k1$i1726397321; zp__utm_source=www.google.com; _ga_76XXTC73SP=GS1.1.1726414964.9.0.1726414964.60.0.1574927547; remember_token_leadgenie_v2=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTJaRGMyTlRWaU5qZzFaRGd3TURKa01EWmtOV0ZpWlY4eU5tSXpaREl6TURBMllqWXpaR1ExTkdFNE16UXlaamxqT1RReU5ESTRNeUk9IiwiZXhwIjoiMjAyNC0xMC0xNVQxNTo0Mjo1Mi4yMjBaIiwicHVyIjoiY29va2llLnJlbWVtYmVyX3Rva2VuX2xlYWRnZW5pZV92MiJ9fQ%3D%3D--930618ef30709c742b6251852c3545b6f849f14d; __hstc=21978340.753bf0b4e56e0d3e3f8558d4484f3e38.1725392197968.1726411601459.1726418519635.11; intercom-session-dyws6i9m=UU5zUTkxODBPMzRTUnpCaHBCNmkrSGNQaVVwR3NObHBnbHJGYkRXRTlpZmQ2NittaEROZjVVTUtKMGhwaVBSeC0tRlJoRWFJTVpJYkR2Z3A2VjI2aWFTQT09--aa5449cc2d5f237cd0e1601290d4803f6c734139; _clsk=1rew4wo%7C1726422140134%7C1%7C1%7Ct.clarity.ms%2Fcollect; GCLB=CNjUhMiW8YrbNBAD; __cf_bm=qFsCyYYnSYkxgkuU7Qq_rQd8TflmtoaEN4AE0hFoBOY-1726422145-1.0.1.1-VMeVD8D3wTiXSygle_oh8gJlKrXvKWNipyLnQNdYTwAelM5DeCyHhatFgAp4TbKori4MMrQwFFkCgbIUlD775g; amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io=eyJkZXZpY2VJZCI6ImJhZTA3MmU4LTk3YzAtNDhmNC05N2U0LWMwN2VkMDZjNDY0NFIiLCJ1c2VySWQiOiI2NmQ3NjU1YjY4NWQ4MDAyZDA2ZDVhYmUiLCJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOjE3MjY0MjIxNDUwMTIsImxhc3RFdmVudFRpbWUiOjE3MjY0MjIxNDU2ODcsImV2ZW50SWQiOjMzNiwiaWRlbnRpZnlJZCI6MjA5LCJzZXF1ZW5jZU51bWJlciI6NTQ1fQ==; X-CSRF-TOKEN=5ypzOQWr7t1yoYhYwpyYtDwX6rJDOfstu4rkBwZr3ecxLbhspXs56Hoil_ejgwdRP5h5VUybMX6E_lBbDmCygg; _leadgenie_session=jOuC0frXFsvTQWxhgnEytPEAxAggI17AgRBm1xkG96khIfM8HZ%2BoJc8QZYFNNhJcnt8bVG2X4AF8tvVfpluQ3s7thxh34bugPzmORhG9gdu0Tli3UDvDo2TRQq8PE4MzSrmL1HsY9xH9yceZLiJuk0IDN9Qp%2Fig%2BuKCm0r0Ul0bQNG4wvsPzPVqa%2B7S0D0D4vmC6%2BUxgjUzlaxqlam%2FLL7aVsiwEP3xgKOPT32Msg8aF0su4DgO26YKG2apXnziNNLOTy0bVRpwh4%2Bh7GMZ48P3jzxhYH9zYfHw%3D--uL27NlJdlyQyfSSI--l9UwSKKNFXa1bKZYtBkqPQ%3D%3D; _dd_s=rum=0&expire=1726423075321",
        Referer: "https://app.apollo.io/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body,
      method: "POST",
    }
  );
  const json = await result.json();
  return json;
};

fetchEmails().then(console.log);
