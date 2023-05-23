import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/main.css';
import { asyncReceiveThreads } from '../states/threads/action';
import { asyncReceiveUsers } from '../states/users/action';
import '../styles/thread.css';
import { FiArrowDownCircle, FiArrowUpCircle} from 'react-icons/fi'
import Navbar from '../components/Navbar';

function Home() {

   const { threads, users }= useSelector((states) => states);
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(asyncReceiveThreads());
      dispatch(asyncReceiveUsers());
   }, [dispatch]);

   const threadWithOwner = threads.map((thread) => {
      const owner = users.filter((user) => user.id === thread.ownerId );
      return {
         ...thread,
         owner: owner[0],
      }
   })

   return (
      <><header>
      <Navbar />
    </header>
            <section className='category'>
               Category
            </section>
            <section className="main-content">
               <div className="list-threads">
                  <div className="thread">
                     <div className="thread-header">
                        <img src=
"https://ui-avatars.com/api/?name=Dimas Saputra&background=random" alt="" />
                        <div className="owner">
                           <p>Dimas Surya</p>
                           <p>6 hari yang lalu</p>
                        </div>
                     </div>
                     <div className="thread-body">
                        <h4>Halo! Selamat datang dan silakan perkenalkan diri kamu!</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse dolorum corrupti quae accusantium itaque dolores temporibus autem illum nobis, assumenda tempore ex nisi eaque quaerat alias odit praesentium quas.</p>
                     </div>
                     <div className="thread-footer">
                        <div className="vote">
                           <div className="up">
                           <span><FiArrowUpCircle/></span>
                           <span> Dukung naik {6}</span>
                           </div>
                           <div className="down">
                           <span><FiArrowDownCircle/></span>
                           <span>{6}</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="thread">
                     <div className="thread-header">
                        <img src=
"https://ui-avatars.com/api/?name=Dimas Saputra&background=random" alt="" />
                        <div className="owner">
                           <p>Dimas Surya</p>
                           <p>6 hari yang lalu</p>
                        </div>
                     </div>
                     <div className="thread-body">
                        <h4>Halo! Selamat datang dan silakan perkenalkan diri kamu!</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse dolorum corrupti quae accusantium itaque dolores temporibus autem illum nobis, assumenda tempore ex nisi eaque quaerat alias odit praesentium quas.</p>
                     </div>
                     <div className="thread-footer">
                        <div className="vote">
                           <div className="up">
                           <span><FiArrowUpCircle/></span>
                           <span> Dukung naik {6}</span>
                           </div>
                           <div className="down">
                           <span><FiArrowDownCircle/></span>
                           <span>{6}</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="thread">
                     <div className="thread-header">
                        <img src=
"https://ui-avatars.com/api/?name=Dimas Saputra&background=random" alt="" />
                        <div className="owner">
                           <p>Dimas Surya</p>
                           <p>6 hari yang lalu</p>
                        </div>
                     </div>
                     <div className="thread-body">
                        <h4>Halo! Selamat datang dan silakan perkenalkan diri kamu!</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse dolorum corrupti quae accusantium itaque dolores temporibus autem illum nobis, assumenda tempore ex nisi eaque quaerat alias odit praesentium quas.</p>
                     </div>
                     <div className="thread-footer">
                        <div className="vote">
                           <div className="up">
                           <span><FiArrowUpCircle/></span>
                           <span> Dukung naik {6}</span>
                           </div>
                           <div className="down">
                           <span><FiArrowDownCircle/></span>
                           <span>{6}</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="thread">
                     <div className="thread-header">
                        <img src=
"https://ui-avatars.com/api/?name=Dimas Saputra&background=random" alt="" />
                        <div className="owner">
                           <p>Dimas Surya</p>
                           <p>6 hari yang lalu</p>
                        </div>
                     </div>
                     <div className="thread-body">
                        <h4>Halo! Selamat datang dan silakan perkenalkan diri kamu!</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse dolorum corrupti quae accusantium itaque dolores temporibus autem illum nobis, assumenda tempore ex nisi eaque quaerat alias odit praesentium quas.</p>
                     </div>
                     <div className="thread-footer">
                        <div className="vote">
                           <div className="up">
                           <span><FiArrowUpCircle/></span>
                           <span> Dukung naik {6}</span>
                           </div>
                           <div className="down">
                           <span><FiArrowDownCircle/></span>
                           <span>{6}</span>
                           </div>
                        </div>
                     </div>
                  </div>
                 
               </div>
            </section>
            <section className="leaderboards">
               Leaderboards
            </section>
      </>
   )
}

export default Home;