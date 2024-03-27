import styles from './index.module.css';

export default function ModalContent({ onClose }) {

    function handelclick() {
        const groupName = document.getElementById('group-name').value;
        const groupId = document.getElementById('group-id').value;
        const groupDirection = document.getElementById('group-direction').value;
        const groupTime = document.getElementById('group-time').value;

        if (groupName && groupId && groupDirection && groupTime) {
            alert('muvaffaqiyatli qoshildi');
        } else {

            alert('bosh maydonlar mavjud');
        }
    }

    return (
        <div className={styles['modal-overlay']} onClick={onClose}>
            <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                <div className={styles['modal-header']}>
                    <h1>Guruh qo‘shish</h1>
                    <p>Yangi guruh qo‘shishingiz mumkin</p>
                </div>
                <div className={styles['modal-hero']}>
                    <div>
                        <label htmlFor="group-name">Guruh nomi</label><br />
                        <input id='group-name' type="text" />
                    </div>
                    <div>
                        <label htmlFor="group-id">ID</label><br />
                        <input type="number" id="group-id" />
                    </div>
                    <div>
                        <label htmlFor="group-direction">yo'nalishi</label><br />
                        <select id='group-direction'>
                            <option value="ingliz tili">ingliz tili</option>
                            <option value="rus tili">rus tili</option>
                            <option value="matematika">matematika</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="group-time">vaqtlari</label><br />
                        <select id='group-time'>
                            <option value="08:30-10:30">08:30-10:30</option>
                            <option value="10:00-12:00">10:00-12:00</option>
                            <option value="14:00-16:00">14:00-16:00</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={handelclick}>Guruhni qo‘shish</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

