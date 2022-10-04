Casa de cambio should have a computer and clean browser with no plugins other than Metamask installed.
They should also have a tablet where the window is with a cutout over where the QR displays and any relevant rates exposed.
The operator should also have a camera that can be activated by the computer accessing the browser.

Cashier registering for NT:
First the cashier generates a key by logging in with email and password. During registration by hitting F12 they can see the 
email hash and the ETH address used for gas. At that moment, you will do the first step in NT registration and generate smart contract
Unless you have a contract that you already want to assign and then proceed registering. Once registered they should import
the private key into Metamask. The cashier can see the private key by typing "showpk" in bid field and click $
Showing the pk can only be done within the first 10 minutes of logging in.
To see the key they need to show the browser console (F12 in Firefox) and then copy it to clipboard
They can take this private key and import it into Metamask. When connecting Metamask that is the account they should select.
The cashier then sends the "ETH Address(used for gas)" to NT
Cashier should also fill this account with a small amount of ETH for transactions.
Large amounts of ETH are not recommended because this account is easy to access. Cashier has control over the ETH.
DAI is sent to a different address where this cashier is an authorized spender and this is 100% secure because the
cashier is not able to steal the DAI because the authorization is limited to up to 5 whitelisted payout addresses
Cashier should also backup their username and password somewhere

NT completing registration of cashier:
NT uses the solidity code in remix to connect to metamask and mint the smart contract(it's STRONGLY recommended you only let
someone you trust 100% to perform this registration step for you such as an experienced DEV)
Double check the contract address on IPFS and on Etherscan to make sure it matches what was minted.
NT should copy the CONTRACT address and add it to the list of exchange/Binance whitelisted addresses
NT should also backup all of the contract data such as the address, ipfs link and so forth
NT can then easily interact with the contract adding up to 5 payout accounts, modifying the spender and locking
They can even change the ERC token contract used for operations although DAI is strongly recommended.
Changes can only be done by the trusted minter of the contract. Minter can lock changes so spender is protected.
Next step is to register the "ETH Address(used for gas)" as the spender (this is the cashier)
Then NT can registered the first payment desination of for example Binance exchange in destination slot 0
Also NT should register the owner of the Casa de Cambio in destination slot 1 so they can cash out if they want
In the future additional exchanges could be registered but starting with one is fine
Lastly NT must manually register the user to the file "users.js" by adding a single entry to the JSON object
For example add a comma after the last entry followed by the cashier ETH/gas address and then the contract address(see example below)
"0x815745746101AFb04d21ECd40577b134d0819e2E":"0xAad6ACaED50082A5e2921dF5904A5bE7715CdC49"
Also an entry should be added to "registeredemails" which should contain the contract address and hash of the email
You can see the hash of the email in the console after a login attempt on the buy or sell calculator.
First add the email hash and then the contract address as follows(see example below)
"0xa9b8bc3c3bfae6b6d2932220d0456facbfd0b43ba6f3ea4414dc3d1cc8b6cd01":"0xAad6ACaED50082A5e2921dF5904A5bE7715CdC49"
Then save the file and replace the one you had at the server. (you could make a backup of the old file as well)
Also push the modifications of the text file of whitelisted payout contract addresses to the server as well

NT minimum and maximums and rates:
All of the rate info and OTC minimums are in "rates.js"
Here you can change minimum and maximums for BTC/ETH and any other pairs that we add
Also you can create a sliding rate where the commission can be bought down the higher the volume. These rates are in order
so it starts at 0. The first element in the list shows 3 numbers 0 being when the rate begins and the rate is overwritten
if there is any entry higher than that later in the list. The entries MUST be in ascending order to be valid.
Then out of the 3 numbers shown the 2nd number is the percent the casa de cambio takes and the 3rd number is NT percent
After modifying this file just save it back to the server.

Cashier interaction with sell calculator:
They should put their email which will identify them for payment. Also they can set the exchange rate at the beginning
of the day. Because Bitso gives a higher rate there is an arbitrage so their clients benefit from the street rate.
The CASA de cambio can sell BTC/ETH and anything else we add. Also they can denominate in Bitcoin, pesos or USD
and no matter what they put the calculator figures out the price in USD. However they should always make sure client
is in agreement with rates. This applies to both sell and buy calculator. Some clients might want a receipt of
the transaction sent to them which is optional and there is a field for that. Also any extra emails to CC can
be put there as well. If more filtered email is needed we can set that up in the future.

When a user is selling crypto:
User can bid on Ethereum or Bitcoin and will see all data and QR. Please try to get the funds sent long before the bid expires.
When a bid is made it is not confirmed until sent via email and the funds physically sent from the seller.
Then NT will send the funds to the casa de cambio. They should wait for those funds to confirm to release cash.
They can have an open tab to check smart contract history on etherescan to see the deposit. NT should confirm with them.
They can also see the DAI balance change by refreshing it in the buy calculator or confirming with NT.
Also it's important to mention that Metamask doesn't track the smart contract address where the DAI is held although the cashier
is the authorized spender of that contract. This is why logging in and also checking on Etherscan lets the cashier know.

NT confirming process:
NT can type "show" in the bid field and click $ to reveal a hidden field that lets NT enter/confirm custom bids
This bid will not be from Binance but instead take the bid NT specifies(the bid claimed in the email receipt).
NT should then confirm the email receipt and ensure it's 100% accurate.
They can also send any confirmation of the release of DAI once it's traded.
NT should send DAI to the operators address from the exchange which they must 100% confirm is a registered contract.
The contract address of the cashier in the email receipt should match NT's private list of cashier contract addresses(the whitelist)
The amount sent should be the Payout amount in receipt PLUS the commission to "casa" (also in receipt) which is confirmed in the calculator.
Its STRONGLY recommended that during operations you use something like "Binance Withdrawal Address Management"
Then make the whitelist ONLY registered cashiers contract accounts. This greatly reduces the chance of making a mistake.
It's also recommended to not mix personal and business use of that account under any circumstances.
Take one trade at a time carefully. Be careful not to pay an address from a different deal. Also try to get bids sent in time to avoid slippage.
Review everything in the receipt and double check it calculator confirmation always and check the whitelist each time.

Casa de cambio logging into buy calculator:
They will enter an email and password to generate the key and check balances the same as when they registered. This calculator will make
sure the buyer can't bid more than they hold in DAI. Also Ethereum will be required to be kept at a minimum level.
When they log in for the first time the browser will ask them permission to connect Metamask and they should agree and keep it unlocked.
Here they can also fill up with some Ethereum for gas and see history of transactions. Please note when sending transactions Metamask
might tell them that it will cost a few dollars in gas. However the actual cost will be lower usually as gas gets refunded. If for
whatever reason they have trouble sending us a transaction in times of high traffic we can raise the gas limit for the software.
It's possible in the future we could estimate those costs based on current gas rates and what the average transaction consumes.

When a user is buying crypto:
User will get the quote and then they can either scan a QR code or type their address manually which either way they will confirm with
the cashier. Then after everything is confirmed and agreed to the cashier sends the email with the information to NT and sends the
DAI and confirms everything with Metamask. Metamask may say it's around 5-20 dollars to send but in actuality it ends up costing only
a couple dollars at the most(it's because of gas estimation). Once the trade is performed funds are sent to the user and NT will
send a transaction ID via email or text message.

NT confirmation process:
Similar to the user selling process, NT will very carefully confirm the information. NT can login and check the ask price as well as
see based on the totals what amount the user was asking. Also they will see the deposit to Binance or the relevant exchange and
verify that it is what the calculator is saying they should get. The key in both buy and sell process is to calculate the bid yourself
and verify all email contents. This is the habit to have and should not be skipped ever. Once the info is known to be correct there
is both the payout address and amount to where to send the funds after the trade. And it's good practice to send a TXID via email and/or text.

Lock/Unlock:
A very important aspect to the smart contract is limiting liabilities so that there is no risk of theft or the accusation of hacking. The owner
and cashier should be aware of this feature. This is why the smart contract is only capable of trading. In addition there is a locking feature
which prevents the minter who created the contract from making changes for 6 months. This timelock is a good failsafe if cashier loses their
account access at least funds can be recovered. Also it protects the client from the minter making changes to destination addresses without
mutual consent. This way, a hacker can never send funds anywhere that isn't intended. Funds simply must go to the designated accounts and only
those accounts which is usually just an exchange or the owner of the Casa de Cambio. The cashier is warned if the account is unlocked and
if the lock is about to expire within the month. This gives time for the lock to be renewed. Also the cashier can type "unlock" as a command
similar to previous commands when logged in and this will send a transaction to make it possible to modify things like destination accounts.
NT is able to create the lock through remix after all the details are agreed to and accounts confirmed during setup.

Withdraw to owner:
The owner of the Casa de Cambio may choose to liquidate his DAI or take some of his DAI away from the trading account. This is a smart decision
when he knows his daily volume and a great idea for security. However the Ethereum gas fees might be paid by the owner especially if done
frequently. The owner can keep DAI in his personal account and only release to a cashier when needed although it's definitely recommended
he has some funds ready for the day at the cashier account. The owner however must be extremely cautious when sending funds back to the cashier
he must send ONLY to a whitelisted address specifically the smart contract address and absolutely NOT the address that holds the Ethereum.
Doing so can cost him if the cashier is corrupt especially because the private key to that account is easily accessible. The address in Metamask
is the same one as when the cashier logs in and that address can just be used for gas for receiving Ethereum which is small amounts.
So for the cashier to send to the owner they have to simply type "withdraw" in the "address" field. Then they type the amount in the buy amount
field and then click to send the DAI. The owner can see the smart contract address in the email generated by the buy calculator. However
ultimately he should have those addresses stored in a file (same whitelist file that NT holds) knowing those are the contract addresses.
