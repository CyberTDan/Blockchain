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

Developed opportunity to choose whether open existing blockchain or create new one.

![alt text](img/OnDemand.jpg?raw=true)

Each new blockchain saved in new database file

## Block should contains 10 transaction and when we reach 100 blocks...

This functionality implemented in transaction handler

```python
  conn = sqlite3.connect(CHAINS_DB)
  cursor = conn.cursor()
  cursor.execute('SELECT length FROM chains where id = ?', (id))
  length = 10 - 2 * int(cursor.fetchone()[0]) // 100
  conn.close()

  if length < 2:
    length = 2
    
  if len(db_trans) >= length:
    # Mine a new block
```
Databse contains counter, that increases when new block created. 

This counter value used for deciding block transaction size

## Implement multithreading in Proof of Work function

Multithreaded fersion of 'proof_of_work' implemented in

```python
def th_proof_of_work(block, dificulty, thread_number=4):
    # some preparations

    # thread task 
    def thread_searcher(thread_id, step_size, lock) :
        # do the same as single thread proof_of_work 

        # if solution found -> notify all threads

    for i in range(thread_number):
        thread = threading.Thread(target=thread_searcher, ...
    ...

    return nonce
```

Number of threads can be adjusted with respect to your platform

