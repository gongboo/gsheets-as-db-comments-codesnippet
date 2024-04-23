# Simple Comment Feature Using Google Sheets and Apps Script

This is a simple implementation of a comment feature using Google Sheets and Google Apps Script as a DB. You can just follow the setting and add html code in your project!

## key point

**Suitable for Low Usage Projects:** This approach is suitable for projects with low usage and low traffic.

Total triggers limit for Apps Script is 90 min per day. [apps script limits](https://developers.google.com/apps-script/guides/services/quotas)

**Easy Integration:** Consists only of HTML, JavaScript, and CSS allowing easy addition to other projects.

**Cost-Effective:** Uses Google Apps Script's free tier.

## How to Set It Up

1. **Create a Google Spreadsheet**:
   - Start by creating a new Google Spreadsheet, which will serve as the storage for comments.

![https://blogger.googleusercontent.com/img/a/AVvXsEi-IwnMb9onpvPoM63Yaifvfw0-2bMM2tNAadnZF6VqMzqoHp1VbHuEQVBDKZqXAFWYBwWgi_hyIn-jgwPkUC9VHWPZVVYF2SZqWGDnljxfyCkHkOugwBCVJIf4biUoLykA32pTp4p8wvAbBwB78vAM380PnnkqcWdlgx5A5FYgYuDdwMRJBbIxzjAKDdiF=s16000](https://blogger.googleusercontent.com/img/a/AVvXsEi-IwnMb9onpvPoM63Yaifvfw0-2bMM2tNAadnZF6VqMzqoHp1VbHuEQVBDKZqXAFWYBwWgi_hyIn-jgwPkUC9VHWPZVVYF2SZqWGDnljxfyCkHkOugwBCVJIf4biUoLykA32pTp4p8wvAbBwB78vAM380PnnkqcWdlgx5A5FYgYuDdwMRJBbIxzjAKDdiF=s16000)

2. **Get the Spreadsheet ID**:
   - Get the Spreadsheet ID which is in the URL after "/d/" and before "/edit".

![https://blogger.googleusercontent.com/img/a/AVvXsEhgZz50nT1zrYEZSMiJmnyAbXZnte8CMcv2w_gZ6lOHWDkX4oV8xc8FwSSXip036RWqQaLW50-oXENv3ml3J1TDiyvHx5_4jhMKweeDjx40ZhldKKRuL6ns3PItq7KLgStW0km5bYdaeeAxnW4p0Vuy5HJcpPClMGOvLNwV4zCD9v_l84k1c3xmk4M5E7pt=s16000](https://blogger.googleusercontent.com/img/a/AVvXsEhgZz50nT1zrYEZSMiJmnyAbXZnte8CMcv2w_gZ6lOHWDkX4oV8xc8FwSSXip036RWqQaLW50-oXENv3ml3J1TDiyvHx5_4jhMKweeDjx40ZhldKKRuL6ns3PItq7KLgStW0km5bYdaeeAxnW4p0Vuy5HJcpPClMGOvLNwV4zCD9v_l84k1c3xmk4M5E7pt=s16000)

Paste the SpreadSheet ID in the `code.gs` in openById function.

3. **Configure Google Apps Script**:

- Navigate to Google Apps Script, paste the provided script from `code.gs` into the script editor.

![https://blogger.googleusercontent.com/img/a/AVvXsEiVVY2SUOEEDW8bkWWtyYVEN1zi2exQlwxVej6tqdD-1uOGP352G6OT-LhWobcFQFg7-jYtMwuZT1vaAmKXHqeuBa56F8CK9selvMJghzirDwcLz06RJu9r5mcOQfr0J9dhJQBg0cnKh3EbscnnZ75xTMc1dH1X44ADtuisGiIfhPp_wFpWc90OYMoRt1ns=s16000](https://blogger.googleusercontent.com/img/a/AVvXsEiVVY2SUOEEDW8bkWWtyYVEN1zi2exQlwxVej6tqdD-1uOGP352G6OT-LhWobcFQFg7-jYtMwuZT1vaAmKXHqeuBa56F8CK9selvMJghzirDwcLz06RJu9r5mcOQfr0J9dhJQBg0cnKh3EbscnnZ75xTMc1dH1X44ADtuisGiIfhPp_wFpWc90OYMoRt1ns=s16000)

![https://blogger.googleusercontent.com/img/a/AVvXsEhCufJfUN5tnfzwvVlke3riMAjN-BlCUfJlU9WBor0M0fcWsjMfGBfuSDejBGDsk0nbYpgdDv0VlnEqMdNt_ci2r2BHeLoyYKdmO7Qg41IsnXPa4VblYWEI5A9FHr1CJOmW2Lb31EuO7hd6WhzEYKO520dLwAEzSfae5QcroJY4bsAmnGnKW94gBaeQE_NA=s16000](https://blogger.googleusercontent.com/img/a/AVvXsEhCufJfUN5tnfzwvVlke3riMAjN-BlCUfJlU9WBor0M0fcWsjMfGBfuSDejBGDsk0nbYpgdDv0VlnEqMdNt_ci2r2BHeLoyYKdmO7Qg41IsnXPa4VblYWEI5A9FHr1CJOmW2Lb31EuO7hd6WhzEYKO520dLwAEzSfae5QcroJY4bsAmnGnKW94gBaeQE_NA=s16000)

4. **Deploy the Apps Script**:
   - Deploy the script with the following settings:
     - Execute the app as: `Me`
     - Who has access to the app: `Anyone, even anonymous`

![https://blogger.googleusercontent.com/img/a/AVvXsEjIFKFyfvKUxlYWUEr1pK1dlxl14N_DGpIlm7NKWN_S5X3tXNFM29nvN14N0kya1PlqZB9DCK7m9S4n4U8KwphfR-Rw_uUwUY2zf87n2LGJC_x1GJ0QMI-TaorYjHMm9NenHnxsL65EvslsgNLMK4xQX4iG_AMdzIkO8OyNHDUJMYQB-4TH1s6GacDU2D6c=s16000](https://blogger.googleusercontent.com/img/a/AVvXsEjIFKFyfvKUxlYWUEr1pK1dlxl14N_DGpIlm7NKWN_S5X3tXNFM29nvN14N0kya1PlqZB9DCK7m9S4n4U8KwphfR-Rw_uUwUY2zf87n2LGJC_x1GJ0QMI-TaorYjHMm9NenHnxsL65EvslsgNLMK4xQX4iG_AMdzIkO8OyNHDUJMYQB-4TH1s6GacDU2D6c=s16000)

![https://blogger.googleusercontent.com/img/a/AVvXsEheLTdQXI5DAMG8kQw7AKoiR3tRY5zqeok0r-Y-IiDQ3lzMmddX_cPgLobiuVbFzKWgh4iuQgIVocmM5jN1LYGIAZgHce6-S4g5kl_lVePgyuZSsItEydc_X_RizhvvUd5FF0zgshjG2fL08FPOlW1HLjUBQGnOKU8VqFVZrrXYvOk9jr16mUu9WC2-LGNr=s16000](https://blogger.googleusercontent.com/img/a/AVvXsEheLTdQXI5DAMG8kQw7AKoiR3tRY5zqeok0r-Y-IiDQ3lzMmddX_cPgLobiuVbFzKWgh4iuQgIVocmM5jN1LYGIAZgHce6-S4g5kl_lVePgyuZSsItEydc_X_RizhvvUd5FF0zgshjG2fL08FPOlW1HLjUBQGnOKU8VqFVZrrXYvOk9jr16mUu9WC2-LGNr=s16000)

![https://blogger.googleusercontent.com/img/a/AVvXsEizRHs9YFPsy7IGfqoJtd4_QgPe0EjQ0FEMraqRq6eiJlQS97RXoWeANgaFTUIhYlV7MVtlw8w1jtQxl_1BTkbt3c-gqJcQ8VxZR17Zf2l--y-r9Eo4fc2JD8QDyzPtOD6mE3M5-wucwygt9gQH9XzKcwYQJBm5KCSOiDxNYOiV6nf8e-hMiSpx6HVpfU0v=s16000](https://blogger.googleusercontent.com/img/a/AVvXsEizRHs9YFPsy7IGfqoJtd4_QgPe0EjQ0FEMraqRq6eiJlQS97RXoWeANgaFTUIhYlV7MVtlw8w1jtQxl_1BTkbt3c-gqJcQ8VxZR17Zf2l--y-r9Eo4fc2JD8QDyzPtOD6mE3M5-wucwygt9gQH9XzKcwYQJBm5KCSOiDxNYOiV6nf8e-hMiSpx6HVpfU0v=s16000)

5. **Integrate into Your Project**:
   - Add the provided HTML snippet into your project to enable the comment feature.

![https://blogger.googleusercontent.com/img/a/AVvXsEh3AyBNCcvGzOx3k51DTrL0y6vxiHa2uZaORWf70QnBBZ5t9-We5I0mwxg4FktOLoGWcxzEEYIeYzcManEcPRXz6jOrc5jRkAu75TPoxv1jJ7X1266JVWgZyHn2Q4x-wwjzR59iO3WUxpx2IHeMMjoD7oAbnSIEBMTyjY0KpAcDYVFpuiV1ehy_ktIMtPFg=s16000](https://blogger.googleusercontent.com/img/a/AVvXsEh3AyBNCcvGzOx3k51DTrL0y6vxiHa2uZaORWf70QnBBZ5t9-We5I0mwxg4FktOLoGWcxzEEYIeYzcManEcPRXz6jOrc5jRkAu75TPoxv1jJ7X1266JVWgZyHn2Q4x-wwjzR59iO3WUxpx2IHeMMjoD7oAbnSIEBMTyjY0KpAcDYVFpuiV1ehy_ktIMtPFg=s16000)

Go to the Deploy > Manage Deployments and copy the URL. Paste it in the url variable in the comment.html.

Finally, paste the total comment html in your web projects.
