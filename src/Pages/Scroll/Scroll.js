import React, { useState } from 'react'
import './Scroll.css'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from 'react-spring'

export default function Scroll() {

    const [toggleTxt, setToggleTxt] = useState(false)

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)"
    })

    return (
        <div>

            <p className="scroll-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga repellat rerum suscipit corporis rem dignissimos numquam ex. Unde qui, beatae quibusdam perferendis fugiat reiciendis mollitia enim consequatur repellat quod magni cupiditate tenetur sint reprehenderit quae sed sunt numquam laudantium soluta saepe dolor. Obcaecati, corporis facilis. Consectetur odio molestias possimus quisquam quaerat dolores quam, temporibus placeat ipsa deleniti facilis quidem, neque minus ab, laboriosam labore facere? Voluptatem, molestias at sed quis iusto ipsum, ab explicabo assumenda ea pariatur nobis optio veniam amet, quam autem ducimus soluta. Labore, repudiandae accusantium obcaecati ipsam neque laborum quo consequuntur, fugit reprehenderit modi incidunt eum iure aspernatur ab, praesentium fugiat voluptatum natus pariatur aut debitis! Iste optio, assumenda impedit consequuntur totam ut sequi aliquid illo earum quisquam nulla officiis fuga. Deserunt, non optio, quibusdam consequuntur iste aperiam iure culpa vitae impedit est tenetur aliquid. Sint ducimus odit modi beatae sunt consequuntur temporibus rem dolorum pariatur maiores, harum hic quia ea, eaque, perferendis voluptate reprehenderit culpa provident illo nostrum nobis vel! Distinctio nisi expedita sint consequuntur repellendus animi similique cum maiores provident! Excepturi dolorum illo doloremque veniam quaerat praesentium aut tempora ab neque impedit at magnam numquam non temporibus voluptatem tenetur cupiditate dicta, voluptates quam dolorem.
          s placeat ipsa deleniti facilis quidem, neque minus ab, laboriosam labore facere? Voluptatem, molestias at sed quis iusto ipsum, ab explicabo assumenda ea pariatur nobis optio veniam amet, quam autem ducimus soluta. Labore, repudiandae accusantium obcaecati ipsam neque laborum quo consequuntur, fugit reprehenderit modi incidunt eum iure aspernatur ab, praesentium fugiat voluptatum natus pariatur aut debitis! Iste optio, assumenda impedit consequuntur totam ut sequi aliquid illo earum quisquam nulla officiis fuga. Deserunt, non optio, quibusdam consequuntur iste aperiam iure culpa vitae impedit est tenetur aliquid. Sint ducimus odit modi beatae sunt consequuntur temporibus rem dolorum pariatur maiores, harum hic quia ea, eaque, perferendis voluptate reprehenderit culpa provident illo nostrum nobis vel! Distinctio nisi expedita sint consequuntur repellendus animi similique cum maiores provident! Excepturi dolorum illo doloremque veniam quaerat praesentium aut tempora ab neque impedit at magnam numquam non temporibus voluptatem tenetur cupiditate dicta, voluptates quam dolorem.

            </p>
            <Waypoint
                bottomOffset="30%"
                onEnter={() => {
                    if (!toggleTxt) {
                        setToggleTxt(true)
                    }
                }}
            />
            <animated.div style={animation} className="cta-section">
                <h2>N'en ratez pas une niette</h2>
                <form >
                    <label htmlFor="email">Inscrivez-vous a la newsletter</label>
                    <input type="email" id="email" />
                </form>
            </animated.div>
            <p className="scroll-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga repellat rerum suscipit corporis rem dignissimos numquam ex. Unde qui, beatae quibusdam perferendis fugiat reiciendis mollitia enim consequatur repellat quod magni cupiditate tenetur sint reprehenderit quae sed sunt numquam laudantium soluta saepe dolor. Obcaecati, corporis facilis. Consectetur odio molestias possimus quisquam quaerat dolores quam, temporibus placeat ipsa deleniti facilis quidem, neque minus ab, laboriosam labore facere? Voluptatem, molestias at sed quis iusto ipsum, ab explicabo assumenda ea pariatur nobis optio veniam amet, quam autem ducimus soluta. Labore, repudiandae accusantium obcaecati ipsam neque laborum quo consequuntur, fugit reprehenderit modi incidunt eum iure aspernatur ab, praesentium fugiat voluptatum natus pariatur aut debitis! Iste optio, assumenda impedit consequuntur totam ut sequi aliquid illo earum quisquam nulla officiis fuga. Deserunt, non optio, quibusdam consequuntur iste aperiam iure culpa vitae impedit est tenetur aliquid. Sint ducimus odit modi beatae sunt consequuntur temporibus rem dolorum pariatur maiores, harum hic quia ea, eaque, perferendis voluptate reprehenderit culpa provident illo nostrum nobis vel! Distinctio nisi expedita sint consequuntur repellendus animi similique cum maiores provident! Excepturi dolorum illo doloremque veniam quaerat praesentium aut tempora ab neque impedit at magnam numquam non temporibus voluptatem tenetur cupiditate dicta, voluptates quam dolorem.</p>
        </div>
    )
}