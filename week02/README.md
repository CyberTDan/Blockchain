# Simple blockchain exercise

The solution is at the following [link](https://replit.com/@CyberTDan/BlockchainFlask-1#main.py)

## Can we Implement function to see the original transactions?
Given [program](https://replit.com/@enghamzasalem/BlockchainFlask#main.py) contains database of blocks without information about 'receiver', 'sender' and 'amount'.
Thus, if requred to get initial transaction all anumerated above fields should be guessed. Guessing of two text fiels and float field is close to unsolvable.
If transaction history is requred, one can create another table with transaction inforamtion withing same database:
```python
cursor.execute('''
      CREATE TABLE IF NOT EXISTS transactions (
          block_hash TEXT,
          sender TEXT,
          receiver TEXT,
          amount REAL
      )
  ''')
```

## Modify the code to create Blockchains on demand

![alt text](https://github.com/CyberTDan/Blockchain/tree/main/week02/download.jpeg?raw=true)