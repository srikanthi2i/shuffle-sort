import { mount, MountingOptions, VueWrapper } from '@vue/test-utils';
import Home from '@/pages/Home.vue';

describe('Home.vue', () => {
  type Instance = InstanceType<typeof Home>;
  let mountFunction: (options?: MountingOptions<Instance>) => VueWrapper<Instance>;
  const cardLength = 9;

  beforeEach(() => {
    mountFunction = (options = {}) => {
      return mount(Home, {
        ...options
      });
    };
  });
  it('should render component and match snapshot', () => {
    const wrapper = mountFunction();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render cards after initialize', async () => {
    const initializeCardsSpy = jest.spyOn(Home.methods, 'initializeCards');
    const wrapper = mountFunction();
    expect(initializeCardsSpy).toHaveBeenCalled();
    await wrapper.setData({ cardLength, cards: [] });
    expect(wrapper.findAll('.card').length).toBe(cardLength);
  });

  it('should trigger the shuffle event', async () => {
    const wrapper = mountFunction();
    const shuffleButton = wrapper.findAll('button')[0];
    await wrapper.setData({ cardLength, cards: [] });
    expect(shuffleButton.text()).toBe('Shuffle');
    await wrapper.vm.$emit('shuffleEvent');
    expect(wrapper.emitted().shuffleEvent).toBeTruthy();
    await wrapper.vm.shuffle();
    expect(wrapper.vm.cards).not.toEqual([...wrapper.vm.cards].sort());
  });

  it('should trigger the sort event', async () => {
    const wrapper = mountFunction();
    const sortButton = wrapper.findAll('button')[1];
    await wrapper.setData({ cardLength, cards: [] });
    expect(sortButton.text()).toBe('Sort');
    await wrapper.vm.$emit('sortEvent');
    expect(wrapper.emitted().sortEvent).toBeTruthy();
    await wrapper.vm.sort();
    expect(wrapper.vm.cards).toEqual(wrapper.vm.cards.sort());
  });
});
