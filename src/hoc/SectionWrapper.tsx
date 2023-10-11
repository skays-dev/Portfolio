import { motion } from 'framer-motion';


const StarWrapper = (Component: any, idName: string, marginTop?: string) =>
    function HOC() {
        return (
            <motion.section
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`section-${idName} mx-auto py-40 z-0 ${marginTop}`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default StarWrapper;
