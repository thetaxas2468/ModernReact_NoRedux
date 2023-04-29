import Modal from "../components/Modal"
import Button from "../components/Button";
import {useState} from "react";

function ModalPage(){
    const [showModal,setShowModal]=useState(false);

    const handleClick = ()=>{
        setShowModal(true);
    }

    const onClose = ()=>{
        setShowModal(false);
    }
    return <div>
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal && <Modal onClose={onClose} actionBar={<Button onClick={onClose} primary>I accept.</Button>}>
            <p>Accept if you want.</p>
            </Modal>}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat nisl at risus viverra molestie. Donec eget sapien placerat, iaculis enim nec, volutpat nisi. Morbi feugiat tristique eros, vel accumsan felis egestas nec. In et bibendum augue. Etiam ac ultrices ipsum. Cras efficitur, mi vel accumsan porttitor, est tellus rhoncus nulla, vel pulvinar felis nibh nec urna. Curabitur luctus vestibulum odio ut dictum. Nullam leo tellus, laoreet bibendum congue in, dictum et leo. Vivamus suscipit, sem a condimentum dictum, lorem lacus elementum lacus, id fringilla diam felis ut tellus. Vestibulum viverra facilisis cursus. Etiam elementum nibh eu orci vestibulum, sed venenatis libero condimentum. Praesent rhoncus, sapien ut ultricies convallis, est lectus porta turpis, ac rhoncus purus velit ut neque.

Sed vitae massa quis elit vulputate congue. Nullam commodo quis ante dapibus condimentum. Pellentesque fermentum fringilla eros non finibus. Quisque vel lectus maximus, facilisis mauris sit amet, auctor dui. In sollicitudin, tortor nec sodales condimentum, lectus massa venenatis augue, at molestie sem ligula a ex. Quisque mollis enim vitae tortor efficitur, ac facilisis nisi pharetra. Vivamus maximus arcu vitae ullamcorper consequat. Etiam sollicitudin tellus libero, a scelerisque libero fringilla vel. Duis auctor mauris quis accumsan ullamcorper. Pellentesque ligula sem, finibus id libero ut, auctor laoreet mauris. Integer in magna sed lectus mollis eleifend vel suscipit orci. Nullam porttitor dignissim nulla. Duis convallis mauris vel justo rhoncus dapibus quis sed sem. Morbi vel elit sapien. Suspendisse et euismod nulla.

Donec sed purus euismod, tempus enim id, ultricies lorem. Etiam commodo at eros a mollis. Duis tincidunt suscipit dapibus. Nullam sed venenatis purus. In lobortis pellentesque ultricies. Aliquam bibendum porta libero ut egestas. Aenean vestibulum at mauris ac consequat. In hac habitasse platea dictumst. Praesent blandit risus dui, vel placerat erat ultricies in. Duis vulputate elit a nibh tincidunt maximus. Curabitur porttitor varius urna quis malesuada. Donec sit amet metus nisl. Nam scelerisque ut urna vel maximus. Curabitur commodo aliquam placerat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra, massa at fringilla facilisis, libero felis blandit tellus, nec pretium nisl neque eget nulla. In porta nulla odio, non euismod diam fermentum eget. Cras at lectus ex. Sed imperdiet euismod diam, eget bibendum erat cursus sit amet. Donec nec lorem vel mi malesuada blandit. Nam at accumsan quam, eget pretium enim. Nunc vitae auctor elit, nec venenatis urna. Quisque vitae ligula vitae nisl scelerisque ornare.

In ut nisl sed massa porta sodales. Nunc ut auctor massa. Nulla facilisi. Sed imperdiet liglor sit amet, consectetur adipiscing elit. Sed volutpat nisl at risus viverra molestie. Donec eget sapien placerat, iaculis enim nec, volutpat nisi. Morbi feugiat tristique eros, vel accumsan felis egestas nec. In et bibendum augue. Etiam ac ultrices ipsum. Cras efficitur, mi vel accumsan porttitor, est tellus rhoncus nulla, vel pulvinar felis nibh nec urna. Curabitur luctus vestibulum odio ut dictum. Nullam leo tellus, laoreet bibendum congue in, dictum et leo. Vivamus suscipit, sem a condimentum dictum, lorem lacus elementum lacus, id fringilla diam felis ut tellus. Vestibulum viverra facilisis cursus. Etiam elementum nibh eu orci vestibulum, sed venenatis libero condimentum. Praesent rhoncus, sapien ut ultricies convallis, est lectus porta turpis, ac rhoncus purus velit ut neque.

Sed vitae massa quis elit vulputate congue. Nullam commodo quis ante dapibus condimentum. Pellentesque fermentum fringilla eros non finibus. Quisque vel lectus maximus, facilisis mauris sit amet, auctor dui. In sollicitudin, tortor nec sodales condimentum, lectus massa venenatis augue, at molestie sem ligula a ex. Quisque mollis enim vitae tortor efficitur, ac facilisis nisi pharetra. Vivamus maximus arcu vitae ullamcorper consequat. Etiam sollicitudin tellus libero, a scelerisque libero fringilla vel. Duis auctor mauris quis accumsan ullamcorper. Pellentesque ligula sem, finibus id libero ut, auctor laoreet mauris. Integer in magna sed lectus mollis eleifend vel suscipit orci. Nullam porttitor dignissim nulla. Duis convallis mauris vel justo rhoncus dapibus quis sed sem. Morbi vel elit sapien. Suspendisse et euismod nulla.

Donec sed purus euismod, tempus enim id, ultricies lorem. Etiam commodo at eros a mollis. Duis tincidunt suscipit dapibus. Nullam sed venenatis purus. In lobortis pellentesque ultricies. Aliquam bibendum porta libero ut egestas. Aenean vestibulum at mauris ac consequat. In hac habitasse platea dictumst. Praesent blandit risus dui, vel placerat erat ultricies in. Duis vulputate elit a nibh tincidunt maximus. Curabitur porttitor varius urna quis malesuada. Donec sit amet metus nisl. Nam scelerisque ut urna vel maximus. Curabitur commodo aliquam placerat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra, massa at fringilla facilisis, libero felis blandit tellus, nec pretium nisl neque eget nulla. In porta nulla odio, non euismod diam fermentum eget. Cras at lectus ex. Sed imperdiet euismod diam, eget bibendum erat cursus sit amet. Donec nec lorem vel mi malesuada blandit. Nam at accumsan quam, eget pretium enim. Nunc vitae auctor elit, nec venenatis urna. Quisque vitae ligula vitae nisl scelerisque ornare.

In ut nisl sed massa porta sodales. Nunc ut auctor massa. Nulla facilisi. Sed imperdiet ligula sed elit sodales, in hendrerit mauris aliquam. Cras et risus ut lectus rhoncus pulvinar ullamcorper id mauris. Vivamus ultrices fringilla nunc, eu rhoncus urna mattis at. Nam vel interdum mi, in gravida orci.</p>
    </div>
}

export default ModalPage;