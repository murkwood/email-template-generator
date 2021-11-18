import { EmailTemplate, VariablesLocale } from './templates.interface';

export const emailTemplate: EmailTemplate = {
    templates: {
        transactional_1: [
            {
                fileName: 'contact_us_request',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText:
                        'We want to thank you for your interest in {brand}. <br> One of our representatives will be in touch with you shortly.',
                    bottomText: 'All the best, <br> {brand} Team',
                },
                variablesLocale: [
                    {
                        locale: 'TR',
                        variables: {
                            topText: 'Merhaba {account.firstname}',
                            mainText:
                                'Ilginize teşekkür etmek istiyoruz {brand}. <br> Temsilcilerimizden biri kısa süre içinde sizinle iletişime geçecektir.',
                            bottomText: 'Iyi gunler, <br> {brand} takımı',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'مرحبًا {account.firstname}',
                            mainText:
                                'نود أن نشكرك على اهتمامك بـ {brand}.<br>سيتواصل معك أحد ممثلينا قريبًا.',
                            bottomText: ' نتمنى لك كل الخير,<br> فريق {brand}',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText:
                                'Gracias por interesarte por {brand}. <br> Uno de nuestros agentes se pondrá en contacto contigo en breve.',
                            bottomText: ' Un saludo,<br> El equipo de {brand}',
                        },
                    },
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText:
                                'Wir möchten uns bei Ihnen für Ihr Interesse an {brand} bedanken. <br> Einer unserer Vertreter wird sich in Kürze mit Ihnen in Verbindung setzen.',
                            bottomText: ' Alles Gute,<br> {brand}-Team',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Ciao {account.firstname}',
                            mainText:
                                'Vogliamo ringraziarti per il tuo interesse per {brand}. <br> Uno dei nostri rappresentanti ti contatterà a breve.',
                            bottomText: 'I migliori saluti,<br> Il team {brand}',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText:
                                'Мы хотим поблагодарить вас за интерес проявленный к {brand}. <br> Один из представителей нашей компании в скором времени свяжется с вами.',
                            bottomText: 'Всего наилучшего,<br> Команда {brand}',
                        },
                    },
                ],
            },
            {
                fileName: 'deposit_confirmation',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText:
                        'Your transaction to your {brand} account has been confirmed. <br> The funds have been credited to your account.',
                    bottomText: 'Thank you, <br> {brand} Team',
                },
                variablesLocale: [
                    {
                        locale: 'TR',
                        variables: {
                            topText: 'Merhaba {account.firstname}',
                            mainText:
                                'Hesabınıza yaptığınız işlem onaylandı Para bakiyenize yatırıldı.',
                            bottomText: 'Teşekkür ederiz, <br> {brand} takımı',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'مرحبًا {account.firstname}',
                            mainText:
                                'تم تأكيد معاملتك إلى حسابك في {brand}.<br>تمت إضافة الأموال إلى حسابك.',
                            bottomText: ' شكرًا لك,<br> فريق {brand}',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText:
                                'Se ha confirmado la transacción a tu cuenta de {brand}<br>El dinero se ha abonado en tu cuenta.',
                            bottomText: 'Gracias,<br>El equipo de {brand}',
                        },
                    },
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText:
                                'Ihre Transaktion zu Ihrem {brand}-Konto wurde bestätigt.<br>Die Beträge wurden Ihrem Konto gutgeschrieben.',
                            bottomText: 'Danke,<br> {brand}-Team',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Ciao {account.firstname}',
                            mainText:
                                'La transazione sul tuo account {brand} è stata confermata.<br>I fondi sono stati accreditati sul tuo conto.',
                            bottomText: 'Grazie,<br> Il team {brand}',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText:
                                'Транзакция на ваш {brand} аккаунт подтверждена.<br>Средства были зачислены на ваш баланс.',
                            bottomText: 'Спасибо,<br> Команда {brand}',
                        },
                    },
                ],
            },
            {
                fileName: 'pending_deposit',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText:
                        'Your transaction to your {brand} account is being processed. <br> A confirmation email will be sent upon completion.',
                    bottomText: 'Thank you, <br> {brand} Team',
                },
                variablesLocale: [
                    {
                        locale: 'TR',
                        variables: {
                            topText: 'Merhaba {account.firstname}',
                            mainText:
                                'Hesabiniza yaptigimiz yatirim İşlemi hala Devam Ediyor <br> Tamamlandığında bir onay e-postası gönderilecektir.',
                            bottomText: 'Teşekkür ederiz, <br> {brand} takımı',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'مرحبًا {account.firstname}',
                            mainText:
                                'تتم معالجة معاملتك إلى حسابك في {brand}.<br>سيتم إرسال بريد إلكتروني للتأكيد عند الانتهاء.',
                            bottomText: 'شكرًا لك,<br> {brand} فريق',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText:
                                'Se está tramitando la transacción a tu cuenta de {brand}<br>Enviaremos un email de confirmación cuando se haya completado.',
                            bottomText: 'Gracias,<br>El equipo de {brand}',
                        },
                    },
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText:
                                'Ihre Transaktion auf Ihr {brand}-Konto wird bearbeitet.<br>Nach Abschluss wird eine Bestätigungs-E-Mail gesendet.',
                            bottomText: 'Danke,<br> {brand}-Team',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Ciao {account.firstname}',
                            mainText:
                                'La transazione sul tuo account {brand} è in fase di elaborazione.<br>Al termine verrà inviata un\'e-mail di conferma.',
                            bottomText: 'Grazie,<br> Il team {brand}',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText:
                                'Транзакция на ваш {brand} аккаунт подтверждена.<br>Средства были зачислены на ваш баланс.',
                            bottomText: 'Спасибо,<br> Команда {brand}',
                        },
                    },
                ],
            },
            {
                fileName: 'withdrawal confirmation',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText:
                        "Your withdrawal request has been approved. <br> The funds will be transferred to you according to your selected payment method. <br><br> <b>Amount: {monetarytransaction.amount}{tpaccount.basecurrencyid.name}</b> <br><br> Please allow 5-7 working days to receive the funds. <br> For any questions, don't hesitate to contact us.",
                    bottomText: 'Kind regards, <br> {brand} Team',
                },
                variablesLocale: [
                    {
                        locale: 'TR',
                        variables: {
                            topText: 'Merhaba {account.firstname}',
                            mainText:
                                'Para Çekme isteginiz onaylandı. <br> Para, seçtiğiniz ödeme yöntemine göre size aktarılacaktır. <br><br> <b>Miktar: {monetarytransaction.amount}{tpaccount.basecurrencyid.name}</b> <br><br> Para çekme işleminiz 24 saat içinde işleme alınacaktır, ancak bankanızın ödemeyi alması için lütfen 5-7 iş günü bekleyin. <br> Herhangi bir sorunuz için bizimle iletişime geçmekten çekinmeyin.',
                            bottomText: 'Saygılarımızla, <br> {brand} takımı',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'مرحبًا {account.firstname}',
                            mainText:
                                'تمت الموافقة على طلبك بالسحب.<br>سيتم تحويل الأموال إليك وفقًا لطريقة الدفع التي اخترتها.<br><br>المبلغ: {monetarytransaction.amount}<br>{tpaccount.basecurrencyid.name}<br>يُرجى الانتظار فترة تتراوح من 5 إلى 7 أيام عمل لاستلام الأموال.<br>لأية استفسارات، لا تتردد في الاتصال بنا.',
                            bottomText: 'مع أطيب التحيات,<br> {brand} فريق',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText:
                                'Se ha aprobado tu solicitud de retirada.<br>Te transferiremos el dinero mediante el método de pago que hayas<br>seleccionado.<br><br>Importe: {monetarytransaction.amount}<br>{tpaccount.basecurrencyid.name}<br><br>Tardarás entre 5 y 7 días laborables en recibir el dinero.<br>Ponte en contacto con nosotros si tienes alguna pregunta.',
                            bottomText: 'Un cordial saludo,<br>El equipo de {brand}',
                        },
                    },
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText:
                                'Ihr Auszahlungsantrag wurde genehmigt.<br>Die Beträge werden entsprechend Ihrer gewählten Zahlungsmethode an Sie überwiesen.<br><br>Betrag: {monetarytransaction.amount}<br>{tpaccount.basecurrencyid.name}<br><br>Bitte gestatten Sie 5-7 Werktage, um das Geld zu erhalten.<br>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.',
                            bottomText: 'Mit freundlichen Grüßen,<br> {brand}-Team',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Ciao {account.firstname}',
                            mainText:
                                'La tua richiesta di prelievo è stata approvata.<br>I fondi ti saranno trasferiti in base al metodo di pagamento selezionato.<br><br>Importo: {monetarytransaction.amount}<br>{tpaccount.basecurrencyid.name}<br><br>La ricezione di fondi può richiedere 5-7 giorni lavorativi.<br>Per qualsiasi domanda non esitare a contattarci.',
                            bottomText: 'Cordiali saluti,<br> Il team {brand}',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText:
                                'Ваш запрос на вывод средств одобрен.<br>Средства будут переведены вам согласно выбранному вами методу.<br><br>Сумма: {monetarytransaction.amount}<br>{tpaccount.basecurrencyid.name}<br><br>Вывод средств будет обработан в течение 24 часов, при этом обращаем ваше внимание на то, что вам придётся подождать 5-7 рабочих дней, до того как ваш банк получит платеж<br>По любым вопросам обращайтесь к нам.',
                            bottomText: 'С наилучшими пожеланиями,<br> Команда {brand}',
                        },
                    },
                ],
            },
        ],
        transactional_2: [
            {
                fileName: 'reset_password',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText1:
                        'We received a password reset request for your account. <br> Click on the button below to reset.',
                    btnText: 'Reset My Password',
                    resetURL:
                        'https://{domain}/new-password/?token={resetpasswordrequest.resetpasswordrequestid}',
                    mainText2:
                        'If you did not ask to reset your password, please ignore this email.',
                    bottomText: 'Thank you, <br> {brand} Team',
                },
                variablesLocale: [
                    {
                        locale: 'TR',
                        variables: {
                            topText: 'Merhaba {account.firstname}',
                            mainText1:
                                'Hesabınız için bir şifre yenileme isteği aldık. <br> Yenilemek için aşağıdaki düğmeye tıklayın.',
                            btnText: 'Şifre Yenileme',
                            resetURL:
                                'https://{domain}/new-password/?token={resetpasswordrequest.resetpasswordrequestid}',
                            mainText2:
                                'Şifrenizi sıfırlamayı siz istemediyseniz, lütfen bu e-postayı dikkate almayın.',
                            bottomText: 'Teşekkür ederiz, <br> {brand} takımı',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'مرحبًا {account.firstname}',
                            mainText1:
                                'لقد تلقينا طلب إعادة تعيين كلمة المرور لحسابك.<br>انقر فوق الزر أدناه لإعادة التعيين.',
                            btnText: 'اعادة تعيين كلمة المرور',
                            resetURL:
                                'https://{domain}/new-password/?token={resetpasswordrequest.resetpasswordrequestid}',
                            mainText2:
                                'يُرجى تجاهل هذا البريد الإلكتروني إذا لم تطلب إعادة تعيين كلمة المرور الخاصة بك.',
                            bottomText: 'مع أطيب التحيات,<br> {brand} فريق',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText1:
                                'Hemos recibido una solicitud para restablecer la contraseña de tu cuenta.<br>Haz clic en el botón de abajo para restablecerla.',
                            btnText: 'Restablecer mi contraseña',
                            resetURL:
                                'https://{domain}/new-password/?token={resetpasswordrequest.resetpasswordrequestid}',
                            mainText2:
                                'Si no has solicitado restablecer la contraseña, puedes ignorar este mail.',
                            bottomText: 'Gracias,<br> El equipo de {brand}',
                        },
                    },
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText1:
                                'Wir haben eine Anfrage zum Zurücksetzen des Passworts für Ihr Konto erhalten.<br>Klicken Sie auf die Schaltfläche unten, um das Passwort zurückzusetzen.',
                            btnText: 'Mein Passwort zurücksetzen',
                            resetURL:
                                'https://{domain}/new-password/?token={resetpasswordrequest.resetpasswordrequestid}',
                            mainText2:
                                'Wenn Sie nicht darum gebeten haben, Ihr Passwort zurückzusetzen, ignorieren Sie diese E-Mail.',
                            bottomText: 'Danke,<br> {brand}-Team',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Ciao {account.firstname}',
                            mainText1:
                                'Abbiamo ricevuto una richiesta di reimpostazione della password per il tuo account.<br>Fai clic sul pulsante in basso per reimpostarla.',
                            btnText: 'Reset My Password',
                            resetURL:
                                'https://{domain}/new-password/?token={resetpasswordrequest.resetpasswordrequestid}',
                            mainText2:
                                'Se non hai chiesto di reimpostare la password, ignora questa e-mail.',
                            bottomText: 'Grazie,<br> Il team {brand}',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText1:
                                'Мы получили запрос на обнуление пароля к вашему аккаунту.<br>Нажмите на кнопку расположенную ниже, чтобы аннулировать пароль.',
                            btnText: 'Переустановить пароль',
                            resetURL:
                                'https://{domain}/new-password/?token={resetpasswordrequest.resetpasswordrequestid}',
                            mainText2:
                                'Если вы не запрашивали обнуление пароля, пожалуйста проигнорируйте данное сообщение.',
                            bottomText: 'Спасибо,<br> Команда {brand}',
                        },
                    },
                ],
            },
            {
                fileName: 'email_verification',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText1:
                        'Please click the link below to verify your email address and activate your account:',
                    btnText: 'Verify My Email Address',
                    resetURL:
                        '#',
                    mainText2:
                        'To protect your account, the verification link is only valid for 24 hours. <br> Make sure to add {brand} to your Safe Senders list, to ensure future emails will not end up in your spam folder.',
                    bottomText: 'Thank you, <br> {brand} Team',
                },
                variablesLocale: [
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText1:
                                'Bitte klicken Sie auf den folgenden Link, um Ihre E-Mail-Adresse zu bestätigen und Ihr Konto zu aktivieren:',
                            btnText: 'Meine E-Mail-Adresse bestätigen',
                            resetURL:
                                '#',
                            mainText2:
                                'Um Ihr Konto zu schützen, ist der Bestätigungslink nur 24 Stunden lang gültig. <br> Stellen Sie sicher, dass Sie {broker} zu Ihrer Liste sicherer Absender hinzufügen, um sicherzustellen, dass zukünftige E-Mails nicht in Ihrem Spam-Ordner landen.',
                            bottomText: 'Danke, <br> {brand} Team',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Salve {account.firstname}',
                            mainText1:
                                'Si prega di fare clic sul collegamento sottostante per verificare il proprio indirizzo e-mail e attivare il proprio account:',
                            btnText: 'Verifica il mio indirizzo e-mail',
                            resetURL:
                                '#',
                            mainText2:
                                'Per proteggere il tuo account, il link di verifica è valido solo per 24 ore. <br> Assicurati di aggiungere {broker} al tuo elenco di Mittenti attendibili (safe sender), per assicurarti che le email future non finiscano nella cartella dello spam.',
                            bottomText: 'Grazie, <br> {brand} Team',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText1:
                                'Haga clic en el enlace a continuación para verificar su dirección de correo electrónico y activar su cuenta:',
                            btnText: 'Verificar mi dirección de correo electrónico',
                            resetURL:
                                '#',
                            mainText2:
                                'Para proteger su cuenta, el enlace de verificación solo es válido durante 24 horas. <br> Asegúrese de agregar {broker} a su lista de remitentes seguros para asegurarse de que los correos electrónicos futuros no terminen en su carpeta de correo no deseado.',
                            bottomText: 'Gracias, <br> Equipo de {brand}',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'أهلا {account.firstname}',
                            mainText1:
                                'الرجاء النقر فوق الارتباط أدناه للتحقق من عنوان بريدك الإلكتروني وتنشيط حسابك:',
                            btnText: 'تحقق من عنوان البريد الإلكتروني الخاص بي',
                            resetURL:
                                '#',
                            mainText2:
                                'لحماية حسابك ، فإن رابط التحقق صالح لمدة 24 ساعة فقط. تأكد من إضافة {broker} إلى قائمة المرسلين الموثوق بهم ، للتأكد من أن البريد الإلكتروني في المستقبل لن ينتهي في مجلد البريد العشوائي.',
                            bottomText: 'شكرا لك, <br> فريق {brand}',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText1:
                                'no translation',
                            btnText: 'no translation',
                            resetURL:
                                '#',
                            mainText2:
                                'no translation',
                            bottomText: 'Спасибо,<br> Команда {brand}',
                        },
                    },
                ],
            },
        ],
        transactional_3: [
            {
                fileName: 'change_password',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText:
                        'Your account password has been changed.',
                    username: '{account.emailaddress1}',
                    password: 'The selected password during registration.',
                    activate: 'Sign In',
                    activateURL: 'https://{domain}',

                },
                variablesLocale: [
                    {
                        locale: 'TR',
                        variables: {
                            topText: 'Merhaba {account.firstname}',
                            mainText:
                                'Hesap şifreniz değiştirildi.',
                            username: '{account.emailaddress1}',
                            password: 'The selected password during registration.',
                            activate: 'Oturum aç',
                            activateURL: 'https://{domain}?lang=tr',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'مرحبًا {account.firstname}',
                            mainText:
                                'تم تغيير كلمة مرور حسابك.',
                            username: '{account.emailaddress1}',
                            password: 'كلمة المرور المختارة أثناء التسجيل',
                            activate: 'تسجيل الدخول',
                            activateURL: 'https://{domain}?lang=ar',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText:
                                'Hemos cambiado la contraseña de tu cuenta.',
                            username: '{account.emailaddress1}',
                            password: 'La contraseña seleccionada durante el registro.',
                            activate: 'Iniciar sesión',
                            activateURL: 'https://{domain}?lang=es',
                        },
                    },
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText:
                                'Ihr Konto-Passwort wurde geändert.',
                            username: '{account.emailaddress1}',
                            password: 'Das bei der Registrierung gewählte Passwort.',
                            activate: 'Einloggen',
                            activateURL: 'https://{domain}?lang=de',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Ciao {account.firstname}',
                            mainText:
                                'La password del tuo account è stata modificata.',
                            username: '{account.emailaddress1}',
                            password: 'La password selezionata durante la registrazione.',
                            activate: 'Sign In',
                            activateURL: 'https://{domain}?lang=it',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText:
                                'Пароль к вашему аккаунту изменён.',
                            username: '{account.emailaddress1}',
                            password: 'выбранный пароль.',
                            activate: 'Войти',
                            activateURL: 'https://{domain}?lang=ru',
                        },
                    },
                ],
            },
        ],
        transactional_4: [
            {
                fileName: 'demo_account',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText:
                        'Your new Demo account is ready. <br> To activate, click on the button below and enter your user name and password.',
                    username: '{account.emailaddress1}',
                    password: 'The selected password during registration.',
                    activate: 'Activate',
                    activateURL: 'https://{domain}',
                },
                variablesLocale: [
                    {
                        locale: 'TR',
                        variables: {
                            topText: 'Merhaba {account.firstname}',
                            mainText:
                                'Yeni Demo hesabınız hazır. <br> Etkinleştirmek için aşağıdaki butona tıklayın ve kullanıcı adınızı ve şifrenizi girin.',
                            username: '{account.emailaddress1}',
                            password: 'The selected password during registration.',
                            activate: 'Activate',
                            activateURL: 'https://{domain}?lang=tr',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'مرحبًا {account.firstname}',
                            mainText:
                                'حسابك التجريبي الجديد جاهز.<br>للتفعيل، انقر فوق الزر أدناه وأدخل اسم المستخدم وكلمة المرور.',
                            username: '{account.emailaddress1}',
                            password: 'كلمة المرور المختارة أثناء التسجيل',
                            activate: 'Activate',
                            activateURL: 'https://{domain}?lang=ar',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText:
                                'Ya está lista tu nueva cuenta de demostración.<br>Ya está lista tu nueva cuenta de demostración. Para activarla, haz clic en el<br>botón que aparece abajo e introduce tu nombre de usuario y contraseña.',
                            username: '{account.emailaddress1}',
                            password: 'La contraseña seleccionada durante el registro.',
                            activate: 'Activar',
                            activateURL: 'https://{domain}?lang=es',
                        },
                    },
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText:
                                'Ihr neues Demo-Konto ist fertig.<br>Klicken Sie zum Aktivieren auf die Schaltfläche unten und geben Sie Ihren Benutzernamen und Ihr Passwort ein.',
                            username: '{account.emailaddress1}',
                            password: 'Das bei der Registrierung gewählte Passwort.',
                            activate: 'Aktivieren',
                            activateURL: 'https://{domain}?lang=de',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Ciao {account.firstname}',
                            mainText:
                                'Il tuo nuovo account Demo è pronto.<br>Per attivarlo, fai clic sul pulsante in basso e inserisci il nome utente e la password.',
                            username: '{account.emailaddress1}',
                            password: 'La password selezionata durante la registrazione.',
                            activate: 'Activate',
                            activateURL: 'https://{domain}?lang=it',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText:
                                'Ваш новый демо аккаунт готов к использованию.<br>Для активации аккаунта, нажмите на кнопку, расположенную ниже и введите имя пользователя и пароль.',
                            username: '{account.emailaddress1}',
                            password: 'выбранный пароль.',
                            activate: 'активировать',
                            activateURL: 'https://{domain}?lang=ru',
                        },
                    },
                ],
            },
            {
                fileName: 'live_account',
                variables: {
                    topText: 'Hi {account.firstname}',
                    mainText:
                        'Your new Live account is ready. <br> To activate, click on the button below and enter your user name and password.',
                    username: '{account.emailaddress1}',
                    password: 'The selected password during registration.',
                    activate: 'Activate',
                    activateURL: 'https://{domain}',
                },
                variablesLocale: [
                    {
                        locale: 'TR',
                        variables: {
                            topText: 'Merhaba {account.firstname}',
                            mainText:
                                'Yeni Demo hesabınız hazır. <br> Etkinleştirmek için aşağıdaki butona tıklayın ve kullanıcı adınızı ve şifrenizi girin.',
                            username: '{account.emailaddress1}',
                            password: 'The selected password during registration.',
                            activate: 'Activate',
                            activateURL: 'https://{domain}?lang=tr',
                        },
                    },
                    {
                        locale: 'AR',
                        variables: {
                            topText: 'مرحبًا {account.firstname}',
                            mainText:
                                'حسابك الحقيقي الجديد جاهز.<br>للتفعيل، انقر فوق الزر أدناه وأدخل اسم المستخدم وكلمة المرور.',
                            username: '{account.emailaddress1}',
                            password: 'كلمة المرور المختارة أثناء التسجيل',
                            activate: 'تفعيل',
                            activateURL: 'https://{domain}?lang=ar',
                        },
                    },
                    {
                        locale: 'ES',
                        variables: {
                            topText: 'Hola {account.firstname}',
                            mainText:
                                'Ya está lista tu nueva cuenta real.<br>Para activarla, haz clic en el botón que aparece abajo e introduce tu nombre<br>de usuario y contraseña.',
                            username: '{account.emailaddress1}',
                            password: 'La contraseña seleccionada durante el registro.',
                            activate: 'Activar',
                            activateURL: 'https://{domain}?lang=es',
                        },
                    },
                    {
                        locale: 'DE',
                        variables: {
                            topText: 'Hallo {account.firstname}',
                            mainText:
                                'Ihr neues Live-Konto ist fertig.<br>Klicken Sie zum Aktivieren auf die Schaltfläche unten und geben Sie Ihren Benutzernamen und Ihr Passwort ein.',
                            username: '{account.emailaddress1}',
                            password: 'Das bei der Registrierung gewählte Passwort.',
                            activate: 'Aktivieren',
                            activateURL: 'https://{domain}?lang=de',
                        },
                    },
                    {
                        locale: 'IT',
                        variables: {
                            topText: 'Ciao {account.firstname}',
                            mainText:
                                'Il tuo nuovo account Live è pronto. <br>Per attivarlo, fai clic sul pulsante in basso e inserisci il nome utente e la password.',
                            username: '{account.emailaddress1}',
                            password: 'La password selezionata durante la registrazione.',
                            activate: 'Activate',
                            activateURL: 'https://{domain}?lang=it',
                        },
                    },
                    {
                        locale: 'RU',
                        variables: {
                            topText: 'Привет {account.firstname}',
                            mainText:
                                'Ваш новый реальный аккаунт готов к использованию.<br>Для активации аккаунта нажмите на кнопку, расположенную ниже и введите имя пользователя и пароль.',
                            username: '{account.emailaddress1}',
                            password: 'выбранный пароль.',
                            activate: 'активировать',
                            activateURL: 'https://{domain}?lang=ru',
                        },
                    },
                ],
            },
        ],
    },
    variables: {
        footer_title: 'footer title',
        forgotPassText: 'Forgot Password?',
        forgotPassURL: 'https://{domain}/forgot-password'
    },
    variablesLocale: [
        {
            locale: 'TR',
            variables: {
                footer_title: '',
                footer_text:
                    '',
            },
        },
        {
            locale: 'AR',
            variables: {
                footer_title: '',
                footer_text:
                    '',
                forgotPassText: 'هل نسيت كلمة المرور؟',
                forgotPassURL: 'https://{domain}/forgot-password?lang=ar'
            },
        },
        {
            locale: 'ES',
            variables: {
                footer_title: '',
                footer_text:
                    '',
                forgotPassText: '¿Ha olvidado la contraseña?',
                forgotPassURL: 'https://{domain}/forgot-password?lang=es'
            },
        },
        {
            locale: 'DE',
            variables: {
                footer_title: '',
                footer_text:
                    '',
                forgotPassText: 'Passwort vergessen?',
                forgotPassURL: 'https://{domain}/forgot-password?lang=de'
            },
        },
        {
            locale: 'IT',
            variables: {
                footer_title: '',
                footer_text:
                    '',
                forgotPassText: 'Hai dimenticato la password?',
                forgotPassURL: 'https://{domain}/forgot-password?lang=it'
            },
        },
        {
            locale: 'RU',
            variables: {
                footer_title: '',
                footer_text:
                    '',
                forgotPassText: 'Забыли пароль?',
                forgotPassURL: 'https://{domain}/forgot-password?lang=ru'
            },
        },
    ],
};
