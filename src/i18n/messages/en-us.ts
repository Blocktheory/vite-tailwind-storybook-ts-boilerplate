import { LOCALES } from "../locales";

const locales = {
    [LOCALES.ENGLISH]: {
        helloFront: "Hello Frontier Extension!",
        onboarding: {
            WalletSetup: "How would you want to setup",
            yourWallet: "your wallet?",
            setupWalletInfo: "Take the first few steps for giant leap in crypto world",
            createWallet: "Create new wallet",
            createWalletDisc:
                "Create a wallet to store, send, receive & invest in thousands of crypto assets and DeFi apps",
            importWallet: "Import a wallet",
            importWalletDisc:
                "Import using a recovery phrase/ private key / keystore and transact from within Frontier",
            connectWallet: "Connect a hardware wallet",
            connectWalletDisc:
                "Connect a wallet to track, stake, invest in crypto assets and DeFi apps",
            setupPassword: "Setup a new Frontier password",
            setupPasswordDesc:
                "You'll need to enter this password to log into your extension wallet",
            createWalletAddDetails: "Almost done! Add your wallet details",
            walletReady: "Your wallet is ready",
            walletReadyDesc: "Now you're all set to explore frontier chrome extension",
            nextSteps: "Next steps for you",
            clickPlugin: "Click on the plugin icon from the browser toolbar",
            pin: "Pin",
            pinFrontier: "'Frontier' extension for quick access",
            joinCommunity: "JOIN OUR COMMUNITY",
            almostDone: "Almost done! your wallet is",
            generating: "Generating...",
            importing: "Importing...",
            almostReady: "Almost ready",
            imported: "Imported",
            created: "Created",
            savePhrase: "Save the 12-word recovery phrase",
            savePhraseDesc:
                "We recommend writing down your recovery phrase and storing it in a secure offline location!",
            copyToClipboard: "Copy to clipboard",
            downloadTxtFile: "Download as .txt file",
            savedPhrase: "I have saved the phrase",
            generatingPhrase:
                "Generating a one time secure recovery phrase for you . . .",
            verifyPhrase: "Verify phrase",
            verify: "Verify",
            submit: "Submit",
            submitting: "Submitting",
            verifyPhraseDesc: "Please enter the required words",
            secureYourKey: "How to secure your key?",
            saveTextFile: "Save the text file in your secured personal system",
            writeDownOnPaper:
                "Write it down on a piece of paper and store it in a safe and secure place",
            storeRecoveryPhrase:
                "Store your recovery phrase in different places to have a backup of your backup",
            neverShareRecoveryPhrase: "Never share your recovery phrase with anyone",
            createCopy: "Create a copy of saved file in a different location",
            chooseWallet: "Wallet you’d like to import",
            chooseWalletDesc: "Choose a wallet from the below list",
            importMobileWallets:
                "Import your mobile wallets to manage your crypto portfolio",
            supportedWallets: "Supported wallets",
            importYour: "Import your",
            wallet: "wallet",
            wallets: "wallets",
            importWalletDesc: "Enter your recovery phrase in correct order",
            recoveryPhrase: "Recovery Phrase",
            privateKey: "Private Key",
            uploadTxtFile: "Upload '.txt' file",
            uploadJsonFile: "Upload '.json' file",
            connectHardWareWallet: "Connect a hardware wallet",
            connectHardWareWalletDesc:
                "Select a hardware wallet you would like to use with Frontier",
            hardwareWallets: "Hardware wallets are the base layer of crypto security",
            whyChooseHardware: "Why to choose a Hardware wallet?",
            selectAccount: "Select an account",
            selectAccountDesc: "Select an account you would like to use with Frontier",
            termsConditions: "terms and conditions",
            password: "Password",
            confirmPassword: "Confirm Password",
            reEnterPassword: "Re-enter Password",
            enterPassword: "Enter Password",
            termsLabel: "By continuing, I agree to Frontier's ",
            minChars: "Minimum 6 characters",
            specialChars: "Minimum 1 special character",
            minNumber: "Minimum 1 number",
            minUpperCase: "Minimum 1 uppercase letter (A-Z)",
            proceed: "Proceed",
            enabled: "Enabled",
            selectChains: "Select Chains",
            walletColor: "Wallet Color",
            multiChainWallet: "All Wallets",
            allEVMWallet: "Ethereum (EVM) Wallets",
            multiChainWalletDesc:
                "Import wallets from over 25 Ethereum-compatible (EVM) and non-EVM blockchains",
            allEVMWalletDesc: "Import wallets from Ethereum-compatible (EVM) blockchains",
            do: "Do’s",
            dont: "Don’ts",
            useMixOfLetters: "Use a mix of letters, numbers & symbols",
            usePasswordManager: "Use a password manager to store",
            dontReuse: "Don’t reuse existing or old passwords",
            avoidAny: "Avoid any personal information or words",
            tipsToKeep: "Tips to keep your key safe",
            walletName: "Wallet name",
            allChains: "All Chains",
            allEvmChains: "All EVM Chains",
            multiChain: "Multi Chain",
            minimumCharacters: "Minimum 6 characters",
            phraseExistsMnemonic:
                "A wallet with the same recovery phrase already exists. Please try again with a different phrase.",
            phraseExistsPrivateKey:
                "A wallet with the same private key already exists. Please try again with a different private key.",
            enterPrivateKey: "Enter your Private key",
            noDeviceSelected: "No device selected",
            selectHDPath: "Select HD Path",
            enterText: "Enter",
            egTradingInvestment: "e.g. Trading, Investment",
            safeText: "Safe",
            independentText: "Independent",
            portableText: "Portable",
            next: "Next",
        },
        settings: {
            language: "Language",
            currency: "Currency",
            manageNetworks: "Manage Networks",
            contacts: "Contacts",
            security: "Security",
            privacyPolicy: "Privacy Policy",
            termsAndConditions: "Terms & Conditions",
            faq: "FAQs",
            contactUs: "Contact Us",
            footerStart: "Made with",
            footerEnd: "in the metaverse",
            addNetwork: "Add Network",
            confirm: "Confirm",
            changePassword: "Change Password",
            autoTimerLock: "Auto-lock Timer",
            recoveryPhrase: "Recovery Phrase",
            lockTitle: "Simplify your Crypto transactions",
            selectLanguage: "Select Language",
            login: "Login",
            loggingIn: "Logging you in...",
            search: "Search",
            disableErrorMessage: "Switch to different network to disable",
            noNetworkFound: "No network found",
            noWalletFound: "No wallet found",
            noNetworkFoundInList: "No network found in your list",
            noWalletFoundInList: "No wallet found in your list",
            networkNameLabel: "Network name",
            networkNamePlaceholder: "Eg: 'Ethereum Mainnet'",
            newRpcUrlLabel: "New RPC URL",
            newRpcUrlPlaceholder: "Eg: 'https://mainnet.io'",
            chainIdLabel: "Chain ID",
            chainIdPlaceholder: "Eg: '1'",
            currencySymbolLabel: "Currency symbol",
            currencySymbolPlaceholder: "Eg: 'ETH'",
            explorerUrlLabel: "Block explorer URL",
            explorerUrlPlaceholder: "Eg: 'https://etherscan.io'",
            networkNameErrMsg: "Enter network name",
            validRpcUrlErrMsg: "Enter a valid RPC URL",
            validChainIDErrMsg: "Enter a valid chain ID",
            validCurrSymbolErrMsg: "Enter a valid currency symbol",
            autoLockTimer: "Auto-lock Timer",
            edit: "Edit",
            remove: "Remove",
            disable: "Disable",
            enable: "Enable",
            selectCurrency: "Select Currency",
            noContactsSaved: "No contacts saved yet",
            addYourTrustedAddress:
                "Add your trusted addresses to make quicker transactions",
            addContact: "Add Contact",
            usernameText: "Username",
            publicAddressText: "Public Address",
            enterPublicAddressText: "Enter public address",
            emailText: "Email",
            enterYourEmailText: "Enter your email id",
            descriptionText: "Description",
            enterDescriptionText: "Enter a brief description",
            sendEmailText: "Send email",
            contactUsText: "Contact us",
            subjectText: "Subject",
            enterSubjectText: "Enter subject line",
            cancel: "Cancel",
            delete: "Delete",
            contactRemoveConfirmTitle: "Are you sure you want to delete this contact ?",
            contactExistError: "contact with address already exist",
            addWallet: "Add Wallet",
            invalidAddressText: "Invalid Address",
            currentPassword: "Current password",
            enterCurrentPassword: "Enter current password",
            newPassword: "New password",
            enterNewPassword: "Enter new password",
            confirmPassword: "Confirm password",
            confirmNewPassword: "Confirm new password",
            settingUp: "Setting up...",
            setUpPassword: "Setup Password",
            passwordDontMatchErrorText: "Password doesn't match",
            currentPasswordInvalid: "Current password is not matching",
            noResultFound: "No results found!",
            loading: "Loading...",
            showPhrase: "Show Phrase",
            exit: "Exit",
            downloadAsTxtFile: "Download as txt file",
            selectWallet: "Select Wallet",
            donotSharethisPhrase: "Do not share this phrase with anyone",
            donotSharethispvtkey: "Do not share this private key with anyone",
            showPrivateKey: "Show Private Key",
            darkMode: "Dark Mode",
            egJohndoeEth: "Eg: johndoe.eth",
        },
        approvals: {
            connectDappTitle: "Connect your wallet to this site?",
            grantPublicKey: "This Dapp would like your public encryption key.",
            consentingPublicKey:
                "By consenting, this Dapp will be able to compose encrypted messages to you.",
            decryptMessageConsent:
                "This website requires you to decrypt the following text in order to complete the operation",
            signMessageConsent: "You are signing the below message, Please verify it",
            dappAccessInfoTitle: "This site will be able to:",
            walletAccess: "View your wallet balance, address and activities",
            approvalForTransactionAccess: "Request approval for transactions",
            dappConnectedTitle: "Connected",
            dappConnectedInfo: "Your wallet is now connected with the site",

            addNewNetworkTitle: "Allow this site to switch network?",
            warnAddingNewNetwork: "Network detail wasn't found in records",
            reviewAddNetwork: "Review",
            addedNewNetworkTitle: "Network added",
            addedNewNetworkInfo: "New network has been added in your wallet account",

            approveTokenAccessTitle: "Approve sign transaction ",
            tokenAccessApprovedTitle: "Access Granted",
            tokenAccessApprovedInfo:
                "app/aave.com has been provided access to your ethereum funds",

            requestedByText: "Requested by",
            switchNetworkTitle: "Allow this site to switch network?",
            switchNetworkInfo: "Switching will cancel all pending transactions",
            groupDenyButton: "Deny",
            groupCancel: "Cancel",
            groupConfirmButton: "Confirm",
            groupDecryptConfirmButton: "Decrypt",
            groupSwitchNetworkButton: "Switch Network",
            switchNetworkApprovedTitle: "Network switched",
            switchNetworkApprovedSubtitle:
                "Your wallet network has been switched to BNB chain",
            approveTransactionTitle: "Approve transaction?",
            withdrawalText: "Withdrawal",
            transactionDetailsText: "Transaction details",
            transactionApprovedTitle: "Approved",
            transactionApprovedSubtitle:
                "Your transaction is underway, we'll notify you when it's completed",
            groupSignButton: "Sign",
            deployContract: "Deploy a Contract?",
            deploySmartContract: "You are deploying a smart contract",
            decryptMessageButton: "Reveal decrypt message",
            notSupportedNetwork:
                "The network this site is trying to switch is not supported yet !",
            switchedTo: "Switched to",
            currentDapp: "for the current",
        },
        home: {
            tokens: "Tokens",
            nfts: "NFTs",
            activities: "Activities",
            description: "DESCRIPTION",
            financial: "Financial",
            viewIn: "View in ",
            failed: "Failed",
            approved: "Approved",
            staked: "Staked",
            received: "Received",
            sent: "Sent",
            removingLiquidity: "Removing Liquidity",
            addLiquidity: "Add Liquidity",
            smartContract: "Smart Contract",
            manageConnection: "Manage Connections",
            searchConnection: "Search connections...",
            noSiteConnected: "No site has been connected to your wallet yet",
            activeConnection: "Active connection",
            otherConnections: "Other Connections",
            noTokensAvailable: "No tokens available to Send",
            noTokensAvailableSwap: "No tokens available to Swap",
            copiedToClipboard: "Copied to clipboard",
            txtFileDownloaded: "Backup file downloaded",
            chooseNetwork: "Choose network",
            chooseWallet: "Choose wallet",
            expandedView: "Expanded View",
            viewInExplorer: "View Account in explorer",
            changeCardColor: "Change Card Colour",
            viewOnOpensea: "View on Opensea",
            noWalletFound: "No Wallet found",
            overAllProfitTitle: "Overall Profit/Loss",
            overAllProfitMessage:
                "The difference between the total investment around and its current market value",
            overAllReturnTitle: "24-Hour Return",
            overAllReturnMessage: "The performance of the asset in the last 24 hours",
            networkFeesPaidTitle: "Network Fees Paid",
            networkFeesPaidMessage:
                "The total amount of fees paid to the blockchain network to process the transaction",
            averageCostTitle: "Average Cost",
            averageCostMessage:
                "The total cost of all purchases made for this asset divided by the number of units bought (excluding network fees)",
            about: "About",
            currentPrice: "Current Price",
            weDNTPrice: "We don't track the price of this asset.",
            portfolio: "Portfolio",
            tokenEmptyTitle: "You do not have tokens in wallet yet",
            buyNow: "Buy Now",
            marketCap: "Market Cap",
            allTimeHigh: "All-time High",
            allTimeLow: "All-time Low",
            from: "From",
            to: "To",
            contractAddress: "Contract Address",
            sold: "Sold",
            bought: "Bought",
            networkFee: "Network fee",
            dateTime: "Date & Time",
            transactionHash: "Transaction Hash",
            searchWalletPlaceholder: "Search wallet name",
            searchNetworkPlaceholder: "Search network",
            remove: "Remove",
            editWallet: "Edit Wallet",
            edit: "Edit",
            walletRemoveConfirmTitle: "Are you sure you want to delete this wallet ?",
            walletName: "Wallet Name",
            walletNamePlaceholder: "Enter wallet Name",
            lastSalePrice: "Last sale price",
            properties: "PROPERTIES",
            noNFTsFound: "There are no NFTs in your wallet",
            noNetworkFound: "No Network found",
            noTokenInWallet: "You do not have tokens in wallet yet",
            noTokenFound: "No token found",
            disconnect: "Disconnect",
            swap: "Swap",
            todayText: "Today",
            yesterdayText: "Yesterday",
            viewWebsite: "View Website",
            connected: "Connected",
            notConnected: "Not Connected",
            noResultFound: "No Result Found",
            noConnectedSite: "No Connected Site",
            addressText: "Address",
            multicallText: "Multicall",
            showMore: "Show more",
            showLess: "Show less",
        },
        actions: {
            receiveHeader: "Receive",
            scanToReceive: "Scan to Receive",
            copyWalletID: "Or copy this wallet address",
            viewInBlockchain: "View in Blockchain Explorer",
            somethingWentWrong: "Something went wrong, try again",
            copiedToClipboard: "Copied to clipboard",
            copy: "Copy",
            bal: "Bal",
            use: "Use",
            swap: "Swap",
            send: "Send",
            buy: "Buy",
            receive: "Receive",
            bridge: "Bridge",
            reviewTransaction: "Review Transaction",
            sendToWallet: "To Wallet",
            memoOptional: "Memo (Optional)",
            reviewOrder: "Review order",
            savedContacts: "Saved Contacts",
            noContactsSaved: "No contacts saved yet",
            noContactFound: "No contact found",
            noTokenFound: "No token found",
            insufficientBalance: "Insufficient balance for transaction",
            networkFee: "Network fee",
            lowLabel: "Low",
            averageLabel: "Average",
            highLabel: "High",
            customLabel: "Custom",
            customGasTitle: "Custom Gas",
            customGasDesc: "Enter the network fee you are willing to pay",
            save: "Save",
            minimumReceived: "Minimum received",
            priceImpact: "Price impact",
            slippageTolerance: "Slippage tolerance",
            frontierFee: "Frontier fee",
            rateText: "Rate",
            rateTextInfo:
                "The rate at which one cryptocurrency will be exchanged for another cryptocurrency.",
            useText: "Use",
            asPerText: "As per",
            transactionFailedLabel: "Transaction failed",
            transactionFailedMessage:
                "Your transaction couldn't be processed due to some issue. Please try again",
            backToHomeLabel: "Back to home",
            backToWalletLabel: "Back to wallet",
            retryLabel: "Retry",
            submittedText: "Submitted",
            submittedMessage:
                "Your transaction is underway, we'll notify you when it's completed",
            processingTransactionText: "Processing your transaction",
            balanceText: "Balance",
            tokenText: "Token",
            selectText: "Select",
            transactionDetailsText: "Transaction details",
            slippage: "Slippage",
            selectMaxPrice: "Select max price slippage for the transaction",
            enterCustom: "Enter Custom...",
            toGet: "To get",
            approve: "Approve",
            enterFrontierPassword: "Enter your frontier passcode",
            confirm: "Confirm",
            pleaseWait: "Please wait...",
            swappingTokens: "Swapping the tokens",
            transactionInProgress:
                "Your transaction is in progress, we’ll notify you when it’s done",
            processingApproval: "Processing approval",
            approvalInProgress:
                "Approval transaction in progress. Please wait on this screen. Do not close the extension.",
            tokenReceived: "Token Received",
            tokensDeposited: "tokens have been deposited into your wallet",
            viewIn: "View in",
            invalidGweiErrorMsg: "GWEI value is too low to execute the transaction",
            invalidNonceErrorMsg: "Nonce value is too low to execute the transaction",
            asPer: "As per",
            total: "Total",
            customGasFeeGasPriceErrorMsg: "Enter valid Gas Price",
            customGasFeeGasLimitErrorMsg: "Enter valid Gas Limit",
            customGasFeeGasNonceErrorMsg: "Enter valid nonce",
            gasPriceInputLabel: "Gas price (GWEI)",
            gasLimitInputLabel: "Gas limit",
            nonceInputLabel: "Nonce",
            invalidAddressErrorMsg: "The entered address is Invalid",
            payAndReceive: "Pay and Receive token can't be same",
            buyToken: "Buy Crypto",
            poweredBy: "Powered By",
            purchaseDesc:
                "You'll be required to enter the wallet address to receive your purchased assets",
            currentlyUsing: "Currently using",
            continuePurchase: "Continue to purchase",
            dataText: "Data",
            additionalDetailsText: "View additional details",
            marketPrice:
                "The difference between market price and estimated price due to trade size.",
            expectedPrice:
                "The difference between the expected price of an order and the price when the order actually executes.",
            feeCharged:
                "The fee charged by Frontier for performing transactions inside the wallet.",
            maxFee: "Max Fee",
            walletAddress: "Wallet address",
            enterMemo: "Enter memo",
            somethingWentWrongPlease: "Something went wrong! Please try again",
            noRoutesFound: "No routes found",
            selectToken: "Select Token",
            transferFrom: "Transfer from",
            transferTo: "Transfer to",
            network: "Network",
            estTime: "Est Time",
            routingInfo: "Routing Info",
            highPriceImpact: "Price impact is high",
            priceImpactDesc:
                "Slippage is more than the set value. Please exercise caution with this swap.",
            sendNFT: "Send NFT",
            continue: "Continue",
            passwordErrMsg: "Hmm, that's not the right password",
            exchangeType: "Exchange type",
            provider: "Provider",
            cameraPermission:
                "Please grant the permission to access the camera for scanning QR.",
            cameraNotFound:
                "Error! Camera not found. Please connect to a web cam to access.",
            selectFiatRamp:
                "Select your preferred fiat on ramp provider to purchase crypto",
            binanceConnectText: "Binance Connect",
            binanceConnectDesc: "Buy or transfer from Binance",
            coinbasePayText: "Coinbase Pay",
            coinbasePayDesc: "Buy or transfer from Coinbase",
            moonpayText: "Moonpay",
            moonpayDesc: "Card, Apple Pay or Bank Transfer",
            moonpayTag: "Accepts Apple Pay",
            junoPayText: "Juno Pay",
            junoPayDesc: "Cards, CashApp and Venmo",
            buyTerms: "By continuing you agree to the Terms of use by",
            and: "and",
            newTokenWarningMsg:
                "Anyone can create a token with whatever name they choose, including fraudulent copies of existing tokens and tokens claiming to represent projects that don't have a token. Always do your own research.",
            price: "Price",
            lastActivity: "Last Activity",
            website: "Website",
            tradingVolume: "Trading Volume",
            importAndContinue: "Import and continue",
            tokenSafetyReview: "Token Safety Review",
            noMatchingForNewContractAddr: "No token matching this contract address found",
            invalidDetails: "Please enter a valid amount",
            ok: "Ok",
        },
        activities: {
            title: "Activities",
            somethingWentWrong: "Something went wrong, try again",
            noTransactionData: "No transaction data found",
        },
        wallet: {
            switchWallet: "Switch Wallet",
            SearchWallet: "Search wallet name",
        },
    },
};

export default locales;
